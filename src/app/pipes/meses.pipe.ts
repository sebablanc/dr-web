import { Pipe, PipeTransform } from '@angular/core';
import { MESES_ITEMS } from 'src/constants/items';

@Pipe({
  name: 'meses'
})
export class MesesPipe implements PipeTransform {

  transform(value: unknown): unknown {
    const mesFinded = MESES_ITEMS.find(el => el.value == value);
    return mesFinded.label;
  }

}
