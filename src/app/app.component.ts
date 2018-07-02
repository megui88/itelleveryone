import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {User} from './User';
import {AuthService} from './auth/auth.service';
import {Adage} from './adages/Adage';
import {AdagesService} from './adages/services/adages.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'I tell everyone';

  user: Observable<User>;
  adage: Observable<Adage>;
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private adagesService: AdagesService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {
    this.user = authService.user;
    this.adage = adagesService.adage;
  }

  ngOnInit(): void {
  }

  logoutApp() {
    this.authService.signOut();
  }

  loginWithFacebook() {
    this.authService.facebookLogin()
      .catch(err => {
        this.openSnackBar(err.message);
      });
  }

  loginWithGoogle() {
    this.authService.googleLogin();
  }

  addNewAdage() {
    this.router.navigate(['/', 'new']);
  }

  goHome() {
    this.adagesService.clean();
    this.router.navigate(['/']);
  }

  editAdage() {
    let _adage = null;
    this.adage.forEach(a => _adage = a);
    this.router.navigate(['/edit/', _adage.id]);
  }

  deleteAdage() {
    if (!confirm('secure?')) {
      return;
    }
    let _adage = null;
    this.adage.forEach(a => _adage = a);
    this.adagesService.delete(_adage.id).then(r => {
      this.router.navigate(['/']);
    });
  }

  openSnackBar(message: string, action: string = 'close') {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

