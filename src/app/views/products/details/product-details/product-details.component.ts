import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product;
  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    /** Doesn't require to unsubscribe from Activated route as the router destroys the subscriber whenever its no longer needed */
    this.activatedRoute.params.subscribe((params: Params) => {
      // Fetch the product selected
      this.productService.fetchProduct(params['id']);
      this.subscription =  this.productService.productsSelected.subscribe((product: Product) => {
        this.product = product;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
