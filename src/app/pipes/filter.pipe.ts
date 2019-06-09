import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], searchText: string): any[] {
    if (!products) {
      return [];
    }
    if (!searchText) {
      return products;
    }
    /** Return the array of products which includes the text user searched (note: Search only in product.name field)  */
    return products.filter(product => {
      return (product.name).toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
