import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline.class';
import { Request } from 'src/app/request/request.class'
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

requestline: Requestline = new Requestline();
request: Request = new Request();
reqId:number =0;
products: Product [] = [];

  constructor(
    private rqstlnsvc: RequestlineService,
    private router: Router,
    private route: ActivatedRoute,
    private prdsvc: ProductService
  ) { }

  saveCreate(): void{
    this.requestline.productId = +this.requestline.productId;
    console.log(this.requestline);
    this.rqstlnsvc.create(this.requestline).subscribe(
      res => {console.debug("create successful");
          this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);},
      err => {console.error(err);}
    );    
  }

  ngOnInit(): void {
    this.requestline.requestId = +this.route.snapshot.params.rid;
    this.prdsvc.list().subscribe(
      res => { console.debug(res); this.products = res; },
      err => { console.error(err);}
    );
  }

}
