import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], query: string): IProduct[] {
    if (query.length === 0) return products;
    return products.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) || 
      p.description.toLowerCase().includes(query.toLowerCase()));
  }

}
