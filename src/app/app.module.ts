import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { BaseModule } from 'app/base/base.module';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { MatIconModule} from '@angular/material/icon';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TableModule } from 'primeng/table';
import { TreeSelectModule } from 'primeng/treeselect';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [AppComponent, ProductsAdminComponent, ProductsComponent, ProductCardComponent, ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    BaseModule,
    MatCardModule,
    MatIconModule,
    KeyFilterModule,
    TableModule,
    TreeSelectModule,
    RatingModule,
    PaginatorModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEn, 'en');
  }
}
