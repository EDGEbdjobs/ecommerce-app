import { CanDeactivateFn } from '@angular/router';
import { ProductCreateComponent } from './products/product-create/product-create/product-create.component';

export const productCreateGuard: CanDeactivateFn<ProductCreateComponent> = (component, currentRoute, currentState, nextState) => {
 
  if(component.productForm.invalid || component.productForm.dirty )
  {
    return confirm("Are you sure you want to leave the product create page");
  }
  return true;
  
};
