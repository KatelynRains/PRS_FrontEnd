import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../core/system.service';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseurl:string = "http://localhost:15534/api/requestlines"
  constructor(
    private http: HttpClient,
    private system: SystemService
  ) { }
  list(): Observable<Requestline[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Requestline[]>;
    }
  get(id: number):Observable<Requestline>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }

  create(req: Requestline): Observable<Requestline>{
    return this.http.post(`${this.baseurl}`, req) as Observable<Requestline>;
  }
  change(req: Requestline): Observable<any>{
    return this.http.put(`${this.baseurl}/${req.id}`,req) as Observable<any>;
  }
  remove(req: Requestline): Observable<Requestline>{
    return this.http.delete(`${this.baseurl}/${req.id}`) as Observable<Requestline>;
  }
}
