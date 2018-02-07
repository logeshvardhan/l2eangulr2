import {Pipe, PipeTransform, Injectable} from '@angular/core';
@Pipe({
    name: 'nutrifilter'
})

export class NutrientFilterPipe implements PipeTransform {
    transform(items, args,): any {
      
      return items.filter((item) => item.nutrientCategory === args);      
    }
    /*transform(items, key, value): any {
      
      return items.filter((item) => item[keykey] === value);      
    }*/
}