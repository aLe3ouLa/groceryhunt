import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    /** Doesn't require to unsubscribe from Activated route as the router destroys the subscriber whenever its no longer needed */
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productService.fetchProduct(params['id']);
      this.productService.productsSelected.subscribe((product: Product) => this.product = product);
    });
  }
}
