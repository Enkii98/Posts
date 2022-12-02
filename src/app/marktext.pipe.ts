import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'marktext',
})

export class MarktextPipe implements PipeTransform {
  transform(value: any, args?: any[]): any {
    if (value && value.length > 0) {
      return `<span class='mark'>${value}</span>`;
    }
    return value;
  }
}
