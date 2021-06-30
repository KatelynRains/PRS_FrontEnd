import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();
  vendors: Vendor[] =[];

  constructor(
    private syssvc: SystemService,
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private router: Router
  ) { }

  saveCreate(): void {
    this.product.vendorId =+ this.product.vendorId;
    this.prodsvc.create(this.product).subscribe(
      res => {console.debug("edit successful");
              this.router.navigateByUrl("/home");},
      err => {console.error(err);}        
    );}
  
  ngOnInit(): void {
     this.vendsvc.list().subscribe(
        res => {this.vendors = res},
        err => {console.error(err)}
    )
  }
}