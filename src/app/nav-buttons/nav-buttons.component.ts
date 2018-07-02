import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../User';
import {Adage} from '../adages/Adage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.css']
})
export class NavButtonsComponent implements OnInit {

  @Input() user: Observable<User>;
  @Input() adage: Observable<Adage>;

  @Output() logout: EventEmitter<any> = new EventEmitter();
  @Output() facebook: EventEmitter<any> = new EventEmitter();
  @Output() google: EventEmitter<any> = new EventEmitter();
  @Output() home: EventEmitter<any> = new EventEmitter();
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() editThis: EventEmitter<any> = new EventEmitter();
  @Output() deleteThis: EventEmitter<any> = new EventEmitter();

  buttonMore = 'primary';
  more = false;
  buttonLogin = 'primary';
  showSocialLogin = false;
  buttonEdit = 'accent';
  edit = false;

  constructor(
    protected router: Router
  ) {
  }

  ngOnInit(): void {
  }

  loginOptions() {
    this.buttonLogin = this.showSocialLogin ? 'primary' : '';
    this.showSocialLogin = !this.showSocialLogin;
  }

  googleLogin() {
    this.google.emit(null);
  }


  facebookLogin() {
    this.facebook.emit(null);
  }


  singOut() {
    this.logout.emit(null);
  }

  moreOptions() {
    this.buttonMore = this.more ? 'primary' : 'disabled';
    this.more = !this.more;
    if (!this.more) {
      this.edit = false;
      this.buttonEdit = 'primary';
    }
  }

  goHome() {
    this.home.emit(null);
  }

  newAdage() {
    this.add.emit(null);
  }

  editOptions() {
    this.buttonEdit = this.edit ? 'primary' : 'disabled';
    this.edit = !this.edit;
  }

  editMe() {
    this.editThis.emit(null);
  }

  deleteMe() {
    this.deleteThis.emit(null);
  }


}
