import { Injectable } from '@angular/core';
import { customData } from '../shared/customdatajson';
import { Http, Response } from '@angular/http';
import { map, catchError, timeout } from 'rxjs/operators';
import { ProcessHttpResponseService } from '../services/process-http-response.service';
import { observable } from 'rxjs';
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  httpOptions = {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };

  finalData: customData;
  constructor(private http: Http, private processHttpResponse: ProcessHttpResponseService) { }

  postData(surveyData) {
    return this.http.post('http://10.119.163.65:8083/payment/surveyData', JSON.stringify(surveyData), this.httpOptions)
      .pipe(map(res => { return res; }))
      .pipe(catchError(err => this.processHttpResponse.handleError(err)))
  }

}
