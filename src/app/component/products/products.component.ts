import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
//calling service to store all the properties
//all property coming from any will be saved inside productList

    //inject api service

    productList:any[]=[];
  constructor(private api: ApiService) { }

  //making api call inside ngonit
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      //this.productList=res;
      console.log(res);
      this.productList=res as any;
    })
  }

}
