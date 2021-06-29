import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product [] = [];
  vendors: Vendor[]=[];
  constructor(
    private prodsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe(
      res => {
        console.debug("Products:", res);
        this.products = res;
      },
      err => {console.error(err);}
    )
  }

}
