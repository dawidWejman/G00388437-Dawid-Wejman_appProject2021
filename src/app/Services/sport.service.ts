import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private httpClient:HttpClient) { }

GetSportInfo():Observable<any>{
 return this.httpClient.get('http://www.omdbapi.com/?i=tt3896198&apikey=eb51c3ed')
}

}
