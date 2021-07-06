import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { LoginComponent } from './user/login/login.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { SortPipe } from './core/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    UserEditComponent,
    UserCreateComponent,
    UserDetailComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    LoginComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    RequestListComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestLinesComponent,
    RequestlineCreateComponent,
    RequestReviewItemComponent,
    RequestReviewListComponent,
    RequestlineEditComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
