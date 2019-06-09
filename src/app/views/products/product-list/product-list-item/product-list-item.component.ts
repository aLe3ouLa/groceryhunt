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
    const width = window.innerWidth;

    if (this.isMobile(width) || this.isTablet(width)) {
     this.navigateToView(product.product_id);
    } else {
     this.navigateToModal(product);
    }
  }

  isMobile(width: any): boolean {
    return width <= 768;
  }

  isTablet(width: any): boolean {
    return width > 768 && width <= 992;
  }

  navigateToView(productId: string) {
    this.router.navigate(['/list/' + productId]);
  }

  navigateToModal(product: Product) {
    this.productOpenToModal.emit(product);
  }

}
