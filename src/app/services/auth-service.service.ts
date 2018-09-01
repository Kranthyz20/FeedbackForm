import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ProcessHttpResponseService } from './process-http-response.service';
import { Observable } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';

export interface Login{
  alreadyGiven:boolean;
  code:number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userPeridList = ['id846223', 'id851322'];
  userPassword = '12345';
  result: any[];
  constructor(private http: Http, private processHTTPMsg: ProcessHttpResponseService) { }

  AuthenticateUser(userDetails): Observable<Login> {
    return this.http.get('http://10.119.163.65:8083/payment/userData?userID=' + userDetails.perid)
      .pipe(map(res => { return this.processHTTPMsg.ExtractData(res); }))
      .pipe(catchError(error => { return this.processHTTPMsg.handleError(error) }))     
  }
}
