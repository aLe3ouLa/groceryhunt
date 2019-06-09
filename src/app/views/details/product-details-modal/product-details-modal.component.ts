import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.css']
})
export class ProductDetailsModalComponent implements OnInit {
  @Input() productId: string;
  productSelected: Product;
  @Output() closeModal = new EventEmitter<boolean>();
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.fetchProduct(this.productId);
    this.productService.productsSelected
            .subscribe(
              (product: Product) => {
                this.productSelected = product;
              }
            );
  }

  onClose() {
    this.closeModal.emit(true);
  }

}
