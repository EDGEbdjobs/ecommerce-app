import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductCreateComponent } from './product-create/product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './products.routing.module';
import { ProductDetailsComponent } from './product-create/product-details/product-details.component';
import { ProductCreateLandingComponent } from './product-create/product-create-landing.component';



@NgModule({
  declarations: [
    ProductListingComponent, 
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailsComponent,
    ProductCreateLandingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ProductRoutingModule
  ]
})
export class ProductsModule { }
