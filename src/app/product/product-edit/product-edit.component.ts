import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  vendors: Vendor[] = [];
  id: number = 0;

  constructor(
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  saveEdit(): void {
    this.product.vendorId =+ this.product.vendorId;
    this.prodsvc.change(this.product).subscribe(
      res => {console.debug("edit successful");
              this.router.navigateByUrl("/home");},
      err => {console.error(err);}        
    );}

    ngOnInit():void {
      this.id = this.route.snapshot.params.id;
      this.vendsvc.list().subscribe(
          res => {this.vendors = res},
          err => {console.error(err)}
      )
      this.prodsvc.get(this.id).subscribe(
        res => {console.debug("Product:", res);
        this.product = res;},
        err => { console.error(err);}
      );
    }
}
