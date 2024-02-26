import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/service/products.service';
import { Product } from 'app/class/product';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products = [];
  public categories = [];
  constructor(private productServ : ProductsService) { 

  }

  ngOnInit(): void {
    this.productServ.getProducts().subscribe(data => {
      this.products = data;
      this.getCategoriesFromProducts(this.products);
    })
    
  }
  getCategoriesFromProducts(products){
    for(let i = 0; i < products.length; i++){
      if(!this.categories.includes(products[i].category)){
        this.categories.push(products[i].category);
      }
    }
  }
  
}
export class NgbdRatingConfig {
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
