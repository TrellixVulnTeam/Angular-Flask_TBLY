import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URL } from './env';

@Injectable()
export class ApiService {

  apiUrl : string

  constructor(private http: HttpClient) {
    if(API_URL.charAt(API_URL.length - 1) == '/')
      this.apiUrl = API_URL
    else
      this.apiUrl = API_URL + '/'
   }

  private httpGet(url : string): any{
    return this.http.get(this.apiUrl + url);
  }

  //GET: index
  public getIndex() : any {
    console.log(this.apiUrl)
    return this.httpGet("");
  }

}
