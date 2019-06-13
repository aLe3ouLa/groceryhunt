import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  @Output() productOpenToModal = new EventEmitter<Product>();

  constructor(private router: Router) { }

  ngOnInit() {}

  onProductClick(product: Product): void  {
    /** Decide the size of the device to have the correct interaction, find the inner width from window object */
    const width = window.innerWidth;

    if (this.isMobile(width) || this.isTablet(width)) {
     this.navigateToView(product.product_id);
    } else {
     this.navigateToModal(product);
    }
  }

  isMobile(width: any): boolean {
    /** Return if the device is mobile */
    return width <= 768;
  }

  isTablet(width: any): boolean {
    /** Return if the device is tablet */
    return width > 768 && width <= 992;
  }

  navigateToView(productId: string) {
    /** Navigate to a seperate view */
    this.router.navigate(['/list/' + productId]);
  }

  navigateToModal(product: Product) {
    /** Navigate to a modal */
    this.productOpenToModal.emit(product);
  }

}
