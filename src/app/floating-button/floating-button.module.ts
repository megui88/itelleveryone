import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FloatingButtonComponent} from './floating-button.component';
import {MatButtonModule, MatIconModule} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
    ],
    declarations: [
        FloatingButtonComponent
    ],
    exports: [
        FloatingButtonComponent,
    ],
    providers: [],
})
export class FloatingButtonModule {
}
