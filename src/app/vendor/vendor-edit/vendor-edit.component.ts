import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
   vendor: Vendor = new Vendor();
   id: number = 0;
  constructor(
    private vendsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

    saveEdit(): void{
      this.vendsvc.change(this.vendor).subscribe(
        res => {console.debug("edit successful");
                this.router.navigateByUrl("/home");},
        err =>{console.error(err);}
      ); }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.vendsvc.get(this.id).subscribe(
      res => {console.debug("Vendor:", res);
      this.vendor = res;},
    err => {console.error(err);}
    );
  }
}
