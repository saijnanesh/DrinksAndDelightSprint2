import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-spec-details',
  templateUrl: './display-spec-details.component.html',
  styleUrls: ['./display-spec-details.component.css']
})
export class DisplaySpecDetailsComponent implements OnInit {
 
specDto;
  constructor(private productService: ProductServiceService , private router:Router ) {
    this.getAllSpecDetails();
   }

  ngOnInit() {
  }
  getAllSpecDetails() {
    this.productService.getStockList().subscribe((data) =>
    {
      this.specDto = data;
      console.log(this.specDto);
    },
    error =>
    {
      console.log(error.error);
      if(error.error == null)
      this.specDto = null;
    });
    }

    placeOrder()
    {
      this.router.navigate(["/placeorder"]);    }

}
