import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limite: string): string {
    let limit = parseInt(limite);
    let continuePoint: string;
    continuePoint = value.length <= limit ? '' : '...';
    return value.substring(0, limit) + continuePoint;
  }
}
