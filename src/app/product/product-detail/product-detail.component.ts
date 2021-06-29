import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  vendor: Vendor = new Vendor();
  id: number = 0;

  constructor(
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

deleteProd(): void {
  this.id = this.route.snapshot.params.id;
  this.prodsvc.remove(this.product).subscribe(
    res => {console.debug("delete successful");
            this.router.navigateByUrl("/home");},
    err => {console.error(err);}        
  );}
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.prodsvc.get(this.id).subscribe(
      res => {
        console.debug("Product:", res);
        this.product = res;
      },
      err => {console.error(err);}
    )
  }

}
