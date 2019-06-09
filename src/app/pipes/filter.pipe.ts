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
    searchText = searchText.toLowerCase();
    return products.filter(product => {
      return (product.name).toLowerCase().includes(searchText);
    });
  }
}
