import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AdageFormComponent} from './form/adage-form.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {AdagesComponent} from './list/adages.component';
import {AdagesService} from './services/adages.service';
import {TimestampToDatePipes} from './pipes/timestamp-to-date.pipes';
import {TruncatePipe} from './pipes/truncate.pipes';
import {AdageComponent} from './details/adage.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    AdageComponent,
    AdagesComponent,
    AdageFormComponent,
    TimestampToDatePipes,
    TruncatePipe,
  ],
  exports: [
    AdageComponent,
    AdagesComponent,
    AdageFormComponent,
    TimestampToDatePipes,
    TruncatePipe,
  ],
  providers: [
    AdagesService,
  ],
})
export class AdageModule {
}
