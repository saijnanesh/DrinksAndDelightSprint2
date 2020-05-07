import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{AppRoutingModule} from "./app-routing.module";
import{HttpClientModule , HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { DialogBoxConfirmationComponent } from './dialog-box-confirmation/dialog-box-confirmation.component';
import { UpdateDeleteOrderComponent } from './update-delete-order/update-delete-order.component';
import { DisplayOrderDetailsComponent } from './display-order-details/display-order-details.component';
import { DisplaySpecDetailsComponent } from './display-spec-details/display-spec-details.component';
import { ErrorpagenotfoundComponent } from './errorpagenotfound/errorpagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaceOrderComponent,
    DialogBoxConfirmationComponent,
    UpdateDeleteOrderComponent,
    DisplayOrderDetailsComponent,
    DisplaySpecDetailsComponent,
    ErrorpagenotfoundComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, FormsModule, HttpClientModule,BrowserAnimationsModule,CommonModule
  ],
  entryComponents: [
    DialogBoxConfirmationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
