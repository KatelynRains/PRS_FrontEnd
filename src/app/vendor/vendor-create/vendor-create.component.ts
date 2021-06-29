import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor: Vendor = new Vendor();

  constructor(
    private vendsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    saveCreate(): void{
      this.vendsvc.create(this.vendor).subscribe(
        res => {console.debug("create successful");
                this.router.navigateByUrl("/home");},
        err => {console.error(err);}        
      ); }
  ngOnInit(): void {
  }

}
