import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.class';
import { Requestline } from '../requestline.class';
import { Request } from 'src/app/request/request.class'
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {
  requestline: Requestline = new Requestline();
  request: Request = new Request();
  id:number =0;
  products: Product [] = [];
  
  constructor(
    private rqstlnsvc: RequestlineService,
    private router: Router,
    private route: ActivatedRoute,
    private prdsvc: ProductService
  ) { }
  
  saveEdit(): void {
   
    this.rqstlnsvc.change(this.requestline).subscribe(
      res => {console.debug("edit successful");
              this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);},
      err => {console.error(err);}        
    ); }
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params.id;
    this.prdsvc.list().subscribe(
      res => {this.products = res},
      err => {console.error(err)}
    )
    this.rqstlnsvc.get(this.id).subscribe(
      res => {console.debug("Requestline:", res);
      this.requestline = res;},
      err => { console.error(err);});
  }
  


}

