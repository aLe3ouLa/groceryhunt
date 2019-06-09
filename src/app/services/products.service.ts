import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ProductService {
  products: Product[] = [];
  selectedProduct: Product;

  productsChanged = new Subject<Product[]>();
  productsSelected = new Subject<Product>();

  constructor(private httpClient: HttpClient) {}

  fetchProducts() {
    this.httpClient
    .get<{products: Product[]}>('http://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list')
    .subscribe(data => this.setProducts(data.products));
  }

  getProduct(productId: string) {
    this.httpClient
    .get<Product>('http://s3-eu-west-1.amazonaws.com/developer-application-test/cart/' + productId + '/detail')
    .subscribe(data => this.setProduct(data));
  }

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next([...this.products]);
  }

  setProduct(product: Product) {
    this.selectedProduct = product;
    this.productsSelected.next(this.selectedProduct);
  }
}
