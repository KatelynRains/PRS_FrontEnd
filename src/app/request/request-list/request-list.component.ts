import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
 
  sortColumn: string = "id";
  sortAsc: boolean = true;
  sortFn(column: string):void{
  if(column === this.sortColumn){
    this.sortAsc =! this.sortAsc;
    return;}
    this.sortColumn = column;
    this.sortAsc = true;
  }

  requests: Request [] =[];
  users: User [] = [];

  constructor(
    private reqsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.reqsvc.list().subscribe(
      res =>{console.debug("Requests:", res);
      this.requests = res;
      },
      err => {console.error(err);}
    )
  }

}
