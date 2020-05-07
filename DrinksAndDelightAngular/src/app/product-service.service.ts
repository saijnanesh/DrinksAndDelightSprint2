import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import{OrderDetailsDTO} from './model/OrderDetailsDTO';
import{catchError} from 'rxjs/operators';
import{ throwError } from 'rxjs';


 
@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  url: string = "http://localhost:8090/api/v1/";

  constructor( private httpClient: HttpClient) { }


  //To place an order
  addProductOrderEntity(orderDetailsDTO : OrderDetailsDTO)
  {
    return this.httpClient.post(this.url + "/placeorder" ,orderDetailsDTO );
  } 

  updateorder(orderDetailsDTO : OrderDetailsDTO)
  {
    return this.httpClient.put(this.url + "updateorder" , orderDetailsDTO);
  }

  //to cancel an order
  deleteOrder(id: number){
    return this.httpClient.delete(this.url + "cancelOrder/" + id);
  }

  //to get the order details by id
  getProductbyId(id: number)
  {
    return this.httpClient.get(this.url + "getProductbyId/" + id );
  }

  //to get all the orderdetails
  getProductOrderList()
  {
    return this.httpClient.get(this.url + "getAllOrders");
  }

  //to get all stock specs
  getStockList()
  {
    return this.httpClient.get(this.url + "getAllProductSpecs");
  }

  //to get stock spec by id
  getProductSpecsById(id: number)
  {
    return this.httpClient.get(this.url + "getProductSpecs/" + id);
  }




    
  }
