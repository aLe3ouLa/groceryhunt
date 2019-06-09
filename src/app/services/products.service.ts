import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ProductService {
  products: Product[] = [];
  selectedProduct: Product;
  private PUBLIC_URL = 'http://s3-eu-west-1.amazonaws.com/developer-application-test/cart/';

  productsChanged = new Subject<Product[]>();
  productsSelected = new Subject<Product>();

  constructor(private httpClient: HttpClient) {}

  /** Fetch all the products from REST api using HTTPClient GET */
  fetchProducts() {
    this.httpClient
    .get<{products: Product[]}>(this.PUBLIC_URL + 'list')
    .subscribe(data => this.setProducts(data.products));
  }

  /** Fetch a product with a specific id from REST api using HTTPClient GET */
  fetchProduct(productId: string) {
    this.httpClient
    .get<Product>(this.PUBLIC_URL + productId + '/detail')
    .subscribe(data => this.setProduct(data));
  }

  /** Helper function to fetch the products, store them temporalily and notify the components using it */
  private setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next([...this.products]);
  }

  /** Helper function to store the product, store it temporalily and notify the components using it */
  private setProduct(product: Product) {
    this.selectedProduct = product;
    this.productsSelected.next(this.selectedProduct);
  }
}
