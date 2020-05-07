import{NgModule , Component} from '@angular/core';
import{Routes , RouterModule} from '@angular/router';
import{PlaceOrderComponent} from './place-order/place-order.component';
import{UpdateDeleteOrderComponent} from './update-delete-order/update-delete-order.component';
import{DisplayOrderDetailsComponent} from './display-order-details/display-order-details.component';
import{DisplaySpecDetailsComponent} from './display-spec-details/display-spec-details.component';
 

const routes: Routes = [
    {path : "placeorder" , component : PlaceOrderComponent},
    {path : "updatedeleteorder" , component : UpdateDeleteOrderComponent},
    {path : "displayorder" , component : DisplayOrderDetailsComponent},
    {path : "displaystock" , component : DisplaySpecDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  