import { Component, OnInit } from '@angular/core';
import { Detail } from '../detail.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product = {
    name : '',
    title : '',
    description : '',
    available : false
  };

  submitted = false;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  createProduct() : void{
    const data = {
      name : this.product.name,
      title : this.product.title,
      description : this.product.description,
      available : false
      };

      this.productService.create(data).subscribe(response=>{
      console.log(response);
      this.submitted = true;
      },
        error => {
        console.log(error);
      });
    } 

    newProduct() : void{
      this.submitted = false;
      this.product = {
        name : '',
        title : '',
        description : '',
        available : false
      };

    }

    //bind model of detail
    detail : Detail[] = [];
    onSubmit() {
      
      
      
    }

  }
  


