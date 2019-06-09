import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ProductService {
  products: Product[] = [];
  productsChanged = new Subject<Product[]>();
  selectedProduct: Product;
  productsSelected = new Subject<Product>();

  constructor(private httpClient: HttpClient) {}

  fetchProducts() {
    this.httpClient.get<{products: Product[]}>('http://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list')
    .subscribe(
      data => {
        this.products = data.products;
        this.productsChanged.next([...this.products]);
      }
    );
  }

  getProduct(id: string) {
    this.httpClient.get('http://s3-eu-west-1.amazonaws.com/developer-application-test/cart/' + id + "/detail")
    .subscribe(
      data => {
        this.selectedProduct = data as Product;
        this.productsSelected.next(this.selectedProduct);
      }
    );
  }
}
