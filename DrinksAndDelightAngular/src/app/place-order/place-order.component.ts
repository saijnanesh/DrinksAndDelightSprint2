import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import{NgForm} from '@angular/forms';
import{OrderDetailsDTO} from '../model/OrderDetailsDTO';
import{ HttpErrorResponse , HttpResponse} from '@angular/common/http';
import { DatatransferbetweencomponentsService } from '../datatransferbetweencomponents.service';




@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})


export class PlaceOrderComponent implements OnInit {
  
  orderDto: OrderDetailsDTO = new OrderDetailsDTO();
  status:string;
  getOrderStatus:boolean = false;

  constructor(private productService: ProductServiceService ) { }

  ngOnInit() {
   
  }
 




  placeOrder(myForm : NgForm)
  {
    this.productService.addProductOrderEntity(this.orderDto).subscribe(

      (response) =>{
        console.log(response);
        this.status = "Order Placed";
        this.getOrderStatus = true;

      },
      error  => {
        console.log(error.error);
        this.getOrderStatus = false;
        if(error.error.text =="Order Placed" )
        {
          this.status = "Order Placed";
          this.getOrderStatus = true;
        }
        else{
          this.status = "Order Unsuccessfull";
          this.getOrderStatus =false;
        }
      }

    );
  }

}
