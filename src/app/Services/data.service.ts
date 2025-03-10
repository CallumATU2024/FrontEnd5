import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Bringing over so I can call upon the function
import{Observable} from 'rxjs';//Used to call the httpclient making it more efficient

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCClient:HttpClient) { }//importing the httpclient to run it

  getStudentData():Observable<any>{
    return this.httpCClient.get('https://jsonblob.com/api/jsonblob/1346093500286033920');//Calling my jsoonfile
  }

  //Caling JsonFiles 
  getWeatherData():Observable<any>{
    return this.httpCClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');//this gets the weather file
  }
}
