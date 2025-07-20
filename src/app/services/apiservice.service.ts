/*Injectable imported so that Service can be injected to other Services as well as components
  Import Observable to define Async API Methods for HTTP Communications
  Import HttpClient so that it can be injected and we can use GET, POST methods of HTTP
*/ 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { AsideItemsContract } from '../contracts/AsideItemsContract';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  //Inject the HttpClient service via Constructor Injection
  constructor(private http : HttpClient) { }

  /*Define API Methods*/
  //Define a method to get all the aside items list from Spring Boot API
  //Also define the AsideItemContract type as the return-type object array
  GetAllListItems(apiUrl:string):Observable<AsideItemsContract[]>{
    return this.http.get<AsideItemsContract[]>(apiUrl);
  }
}
