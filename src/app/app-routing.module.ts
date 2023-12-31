import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ProductListingComponent } from './products/product-listing/product-listing.component';
import { ProductCreateComponent } from './products/product-create/product-create/product-create.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NotPermittedComponent } from './not-permitted/not-permitted.component';

const routes: Routes = [
 
  {path:"order-create", component:OrderCreateComponent},
  {path:"", component:HomeComponent},
  {path:"products", loadChildren:() => import('./products/products.module').then(m => m.ProductsModule)},
  {path:'not-permitted', component:NotPermittedComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers:[ provideRouter(routes,withComponentInputBinding()) ]
})
export class AppRoutingModule { }
