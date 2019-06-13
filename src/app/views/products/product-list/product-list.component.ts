import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  searchText: string;
  products: Product[];
  modalSelected: Product;
  private subscription: Subscription;
  constructor(private productsService: ProductService) { }

  ngOnInit() {
    /** Fetch all products */
    this.productsService.fetchProducts();
    this.subscription = this.productsService.productsChanged
      .subscribe((products: Product[]) =>  this.products = products);
  }

  onModalSelected(event: {product_id: string, name: string, price: string, image: string}) {
    /** Which product is selected for modal */
    const product = new Product (event.product_id, event.name, event.price, event.image);
    this.modalSelected = product;
  }

  onClosedModal() {
    /** Close modal */
    this.modalSelected = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
