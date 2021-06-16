import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products :any;
  currentProduct : null;
  currentIndex = -1;
  name = '';


  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void{
    this.productService.readAll().subscribe(products => {this.products = products;
    console.log(products);
    },
    error => {
      console.log(error);
    });
  }

   refresh() : void{
     this.readProducts();
     this.currentProduct = null;
     this.currentIndex = -1;
   }
   searchByName(){}
   setCurrentProduct(product :any, index:any){}
   deleteAllProducts(){}
  }


