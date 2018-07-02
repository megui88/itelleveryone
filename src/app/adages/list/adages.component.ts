import {Component, OnInit} from '@angular/core';
import {AdagesService} from '../services/adages.service';
import {Adage} from '../Adage';
import {Observable} from 'rxjs';
import {User} from '../../User';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-adages',
  templateUrl: './adages.component.html',
  styleUrls: ['./adages.component.css']
})
export class AdagesComponent implements OnInit {

  adages: Observable<Adage[]>;
  user: Observable<User>;

  constructor(
    private adagesService: AdagesService,
    private authService: AuthService
  ) {
    this.user = authService.user;
  }

  ngOnInit() {
    this.adages = this.adagesService.all();
  }
}
