import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor = new Vendor();
  id: number =0;

  constructor(
    private vendsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  deleteVendor(): void{
    this.id = this.route.snapshot.params.id;
    this.vendsvc.remove(this.vendor).subscribe(
      res =>{ console.debug("delete successful");
            this.router.navigateByUrl("/home");},
      err => { console.error(err);}
    ); }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.vendsvc.get(this.id).subscribe(
      res => {console.debug("Vendor:", res);
        this.vendor = res;
    },
    err => { console.error(err);}
    );
  }
}
