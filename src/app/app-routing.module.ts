import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './products/product-listing/product-listing.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { OrderCreateComponent } from './order-create/order-create.component';

const routes: Routes = [
  {path:"products" , component:ProductListingComponent},
  {path:"product-create", component:ProductCreateComponent},
  {path:"order-create", component:OrderCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
