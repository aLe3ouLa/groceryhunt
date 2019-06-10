import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { ProductDetailsComponent } from './details/product-details/product-details.component';
import { ProductDetailsModalComponent } from './details/product-details-modal/product-details-modal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailsComponent,
    ProductDetailsModalComponent,
    FilterPipe,
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailsComponent,
    ProductDetailsModalComponent,
  ]
})
export class ProductsModule {}
