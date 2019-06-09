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
  private id: string;
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.productService.fetchProduct(this.id);
          this.productService.productsSelected
            .subscribe(
              (product: Product) => {
                this.product = product;
              }
            );
      });
}

}
