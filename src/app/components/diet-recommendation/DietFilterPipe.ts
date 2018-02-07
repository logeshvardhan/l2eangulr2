import {Pipe, PipeTransform, Injectable} from '@angular/core';
@Pipe({
    name: 'dietfilter'
})

export class DietFilterPipe implements PipeTransform {
    transform(items, arg1, arg2): any {
      //console.log("condition "+items)
      return items.filter((item) => item[arg1] === arg2);
      //return items.filter((item) => item.indexOf(args)!==-1);

      /*if (filter && Array.isArray(items)) {
          let filterKeys = Object.keys(filter);
          return items.filter(item =>
              filterKeys.reduce((memo, keyName) =>
                  (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
      } else {
          return items;
      }*/
    }
}
