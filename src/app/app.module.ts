import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderCreateComponent } from './order-create/order-create.component';
import { ProductsModule } from './products/products.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NotPermittedComponent } from './not-permitted/not-permitted.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderCreateComponent,
    NotFoundComponent,
    HomeComponent,
    NotPermittedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
