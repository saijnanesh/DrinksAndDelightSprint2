import { Component, OnInit } from '@angular/core';
import{ ProductServiceService } from '../product-service.service';
import { DatatransferbetweencomponentsService } from '../datatransferbetweencomponents.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-update-delete-order',
  templateUrl: './update-delete-order.component.html',
  styleUrls: ['./update-delete-order.component.css']
})
export class UpdateDeleteOrderComponent implements OnInit {

  orderDto;
  idToEdit : number;
  constructor(private productService: ProductServiceService, private dataTransfer : DatatransferbetweencomponentsService , private router: Router ) { }

  ngOnInit() {
    this.idToEdit = this.dataTransfer.getOrderId();
    this.getProduct();
    console.log(this.idToEdit);
  }
  getProduct()
  {
    if(this.idToEdit > 0)
    {
      this.productService.getProductbyId(this.idToEdit).subscribe((data) => {
        this.orderDto = data;
        console.log(this.orderDto);
      },
      error =>
      {
        console.log(error.error);
      }
      );
    }
    else
    {
      this.router.navigate(["/displayorder"]);
    }

      
  }

  updateProduct() {
    this.productService.updateorder(this.orderDto).subscribe((data) => {
      //TODO change alert to standard pop
      console.log("Data updated successfully!"+data);
      this.router.navigate(["/displayorder"]);
    }, error => {
      console.log(error.error);
      this.router.navigate(["/displayorder"]);
    });
  }

  }
