import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpResponseService {

  constructor() { }

  public ExtractData(result: Response) {
    let body = result.json();
    return body || {};
  }

  public handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''}  ${err}`;
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.log(errMsg);
    return Observable.throw(errMsg);

  }
}
