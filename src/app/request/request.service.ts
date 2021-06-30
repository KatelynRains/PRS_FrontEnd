import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../core/system.service';
import { Request } from './request.class'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl:string = "http://localhost:15534/api/requests"
  constructor(
    private http: HttpClient,
    private syssvc: SystemService,
  ) { }

  list(): Observable<Request[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
    }
  get(id: number):Observable<Request>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
  create(req: Request): Observable<Request>{
    return this.http.post(`${this.baseurl}`, req) as Observable<Request>;
  }
  change(req: Request): Observable<any>{
    return this.http.put(`${this.baseurl}/${req.id}`,req) as Observable<any>;
  }
  remove(req: Request): Observable<Request>{
    return this.http.delete(`${this.baseurl}/${req.id}`) as Observable<Request>;
  }
//requests in review status for non-logged in user
  requests(userid: number): Observable<Request[]>{
    let userId = this.syssvc.loggedInUser?.id;
    return this.http.get(`${this.baseurl}/${userId}/reviews`) as Observable<Request[]>;
  }
//requests to review or approve based on request total
  review(req: Request): Observable<any>{
    return this.http.put(`${this.baseurl}/${req.id}/review`, req) as Observable<any>;
  }
//approve request
  approve(req: Request): Observable<any>{
    return this.http.put(`${this.baseurl}/${req.id}/approve`, req) as Observable<any>;
  }
//reject request
  reject(req: Request): Observable<any>{
    return this.http.put(`${this.baseurl}/${req.id}/reject`, req) as Observable<any>;
  }  
}
