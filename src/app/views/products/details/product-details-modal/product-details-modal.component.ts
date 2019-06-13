import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.css']
})
export class ProductDetailsModalComponent implements OnInit, OnDestroy {
  @Input() productId: string;
  @Output() closeModal = new EventEmitter<boolean>();
  private subscription: Subscription;
  productSelected: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.fetchProduct(this.productId);
    this.subscription = this.productService.productsSelected.subscribe((product: Product) => {
      // Fetch the product selected
      this.productSelected = product;
    });
  }

  getPriceAsCents() {
    return +this.productSelected.price * 0.01;
  }

  onModalClose() {
    /* Close the modal */
    this.closeModal.emit(true);
  }

  ngOnDestroy() {
    /** Destroy the subscription to the observable */
    this.subscription.unsubscribe();
  }
}
