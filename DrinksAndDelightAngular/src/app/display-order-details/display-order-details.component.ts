import { Component, OnInit } from '@angular/core';
import { OrderDetailsDTO } from '../model/OrderDetailsDTO';
import { DatatransferbetweencomponentsService } from '../datatransferbetweencomponents.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-display-order-details',
  templateUrl: './display-order-details.component.html',
  styleUrls: ['./display-order-details.component.css']
})
export class DisplayOrderDetailsComponent implements OnInit {
  orderDto;

  constructor(private productService: ProductServiceService , private dataTransfer : DatatransferbetweencomponentsService , private router : Router) { 
    this.getAllOrderMaterials();
  }

  ngOnInit() {
  }
  getAllOrderMaterials() {
    this.productService.getProductOrderList().subscribe((data) =>
    {
      this.orderDto = data;
      console.log(this.orderDto);
    },error => {
      console.log(error.error);
      if(error.error == null)
      this.orderDto = null;
    });
  }

  updateOrder(id: number)
  {
    this.dataTransfer.setOrderId(id);
    this.router.navigate(["/updatedeleteorder"]);
  }

  deleteOrder(id: number)
  {
    this.productService.deleteOrder(id).subscribe((data) => 
    {
      console.log("Product Deleted Successfully");
      this.getAllOrderMaterials();
    },
    error =>{
      console.log(error.error)
      this.getAllOrderMaterials();
    }
    )
  }

}
