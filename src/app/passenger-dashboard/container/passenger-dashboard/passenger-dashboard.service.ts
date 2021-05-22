import { Injectable } from '@angular/core';
import { Passenger } from '../../models/Passenger';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const Passenger_API : string = 'http://localhost:3000/passengers';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  

  constructor(private http: HttpClient) {}

  getPassengers() : Observable<Passenger[]>  {

    return this.http.get<Passenger[]>(Passenger_API);
    // return this.http.get(Passenger_API).map((response: Response) => {
    //   return response.json;
    // })
  }
}
