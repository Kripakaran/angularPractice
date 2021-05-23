import { Injectable } from '@angular/core';
import { Passenger } from '../../models/Passenger';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const Passenger_API : string = 'http://localhost:3000/passengers';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers() : Observable<Passenger[]>  {
    // console.log('get request');
    return this.http.get<Passenger[]>(Passenger_API);
  }

  updatePassenger(passenger : Passenger) : Observable<Passenger>  {

    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    // console.log('put request');
    // get passenger by id thru api as follows
    return this.http.put<Passenger>(`${Passenger_API}/${passenger.id}`, passenger);



    // aliter form : 
    // return this.http.put<Passenger[]>(Passenger_API + '/' + passenger.id, passenger);


    
    /*   using HTTP headers


    headers.append('Content-Type','application/json');
    // console.log('put request');
    // get passenger by id thru api as follows
    return this.http.put<Passenger>(`${Passenger_API}/${passenger.id}`, passenger, {headers:headers});

    */
  }


  removePassenger(passenger : Passenger) : Observable<Passenger>  {
    console.log('delete request');
    return this.http.delete<Passenger>(`${Passenger_API}/${passenger.id}`);
  }
}
