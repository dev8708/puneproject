import { PipeTransform, Pipe } from '@angular/core';
import humanFormat from 'human-format';
@Pipe({ name: 'filesize', pure: true })
export class FileSizePipe implements PipeTransform {

  transform(value: any): string {
    if (value === null || value === undefined || value === '') return '0 B';
    return humanFormat(value, {
      scale: 'binary',
      unit: 'B'
    });
  }

}
