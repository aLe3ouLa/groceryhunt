import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './views/navbar/navbar.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductListComponent } from './views/products/product-list/product-list.component';
import { ProductListItemComponent } from './views/products/product-list/product-list-item/product-list-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductDetailsComponent } from './views/details/product-details/product-details.component';
import { ProductDetailsModalComponent } from './views/details/product-details-modal/product-details-modal.component';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
    FilterPipe,
    ProductDetailsComponent,
    ProductDetailsModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
