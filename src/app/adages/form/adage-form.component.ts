import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Adage} from '../Adage';
import {AdagesService} from '../services/adages.service';
import {Observable} from 'rxjs';
import {User} from '../../User';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-adage-form',
  templateUrl: './adage-form.component.html',
  styleUrls: ['./adage-form.component.css']
})
export class AdageFormComponent implements OnInit {

  user: Observable<User>;
  adage: Adage;
  adding: boolean;


  constructor(
    private authService: AuthService,
    private adagesService: AdagesService,
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
  ) {
    this.user = authService.user;
    this.adage = {} as Adage;
    this.adding = false;
  }

  ngOnInit() {

    this.adagesService.adage.subscribe(adage => {
      this.adage.id = adage.id;
      this.adage.title = adage.title;
      this.adage.description = adage.description;
    });
    this.route.params.forEach((params: Params) => {
      const id = params['id'];
      this.adagesService.find(id);
    });
    this.user.subscribe(user => {
      if (!user) {
        return;
      }
      this.adage.author = user.displayName;
      this.adage.uid = user.uid;
      this.adage.photoURL = user.photoURL;
      this.adage.title = '';
      this.adage.description = '';
    });
  }

  openSnackBar(message: string, action: string = 'Close') {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  saveMe() {
    this.adding = true;

    if (!this.validate()) {
      this.openSnackBar('Title is required!');
      this.adding = false;
      return;
    }

    if (this.adage.id) {
      this.adagesService.updateAdageData(this.adage).then(a => {

        this.router.navigate(['/', this.adage.id]);
      });

      return;
    }
    this.adagesService.add(this.adage)
      .then(r => {
        this.router.navigate(['/', r.id]);
      })
      .catch(e => {
        console.log('err', e);
        this.openSnackBar('Ups. Something is not going, try again later!');
      });
  }

  undo() {
    this.router.navigate(['/']);
  }

  validate() {
    return this.adage.title !== '' && this.adage.title !== undefined;
  }

}
