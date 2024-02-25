import { Component, OnInit } from '@angular/core';
import { ProductsService} from 'app/service/products.service';
import { Product } from 'app/interfaces/product';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  selectedProducts!: Product[];
  selectAll: boolean = false;
  totalRecords!: number;
  loading: boolean = false;
  products! : Product[];
  buttonDisabled = true;
  
  constructor(private productServ : ProductsService) { 

  }

  ngOnInit(): void {
    this.loading = true;
  }

  loadProducts(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
        this.productServ.getProductsFromAdmin({ lazyEvent: JSON.stringify(event) }).then((data) => {
            this.products = data;
            this.totalRecords = data.length;
            this.loading = false;
        });
    }, 1000);
}

  onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedProducts = value;
    if (this.selectedProducts.length > 0){
      this.buttonDisabled = false;
    }else{
      this.buttonDisabled = true;
    }
    
}

  onSelectAllChange(event: any) {
      const checked = event.checked;

      if (checked) {
        this.productServ.getProductsFromAdmin().then((data) => {
              this.selectedProducts = data;
              this.selectAll = true;
             
          });
      } else {
          this.selectedProducts = [];
          this.selectAll = false;
          this.buttonDisabled = true;
      }
  }
}
