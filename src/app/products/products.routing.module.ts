import { NgModule } from "@angular/core";
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from "@angular/router";
import { ProductListingComponent } from "./product-listing/product-listing.component";
import { ProductCreateComponent } from "./product-create/product-create/product-create.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductCreateLandingComponent } from "./product-create/product-create-landing.component";
import { ProductDetailsComponent } from "./product-create/product-details/product-details.component";
import { testGuardGuard } from "../test-guard.guard";
import { productCreateGuard } from "../product-create.guard";

const routes:Routes = [
    {path:"" , component:ProductListingComponent},
    {path:"create", 
    component:ProductCreateLandingComponent,
    canActivate:[testGuardGuard],
    children: [
        {path:'',component:ProductCreateComponent, canDeactivate:[productCreateGuard]},
        {path:'details',component:ProductDetailsComponent}
    ]

    },
    {path:"edit/:id", component:ProductEditComponent},
]


@NgModule(
    {
        imports: [
            RouterModule.forChild(routes)
           ],
           exports: [RouterModule],
           providers:[
             provideRouter(routes,withComponentInputBinding())
           ]
    }
)
export class ProductRoutingModule{

}