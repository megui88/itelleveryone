import {NgModule} from '@angular/core';

import {AuthService} from './auth.service';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    AuthService
  ]
})
export class AuthModule {
}
