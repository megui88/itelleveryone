import {NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'timestampToDate'})
export class TimestampToDatePipes implements PipeTransform {
    transform(value: any, format?: string): string {
        if (value == null) {
            return '';
        }
        return value.toDate();
    }
}
