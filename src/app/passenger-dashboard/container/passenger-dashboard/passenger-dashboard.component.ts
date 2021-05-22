import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/Passenger';
import { PassengerDashboardService } from './passenger-dashboard.service';




@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  

  title: String;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerDashboardService){
    this.title = '';
  }
  onClick(){
    this.title = 'Light Yagami';
    console.log('button clicked!');
  }
  handleBlur(event: any){
    console.log(event);
    this.title = event.target.value;
  }
  handleInput(event: any){
    console.log(event);
    this.title = event.target.value;
  }



  ngOnInit(): void {
    this.passengerService.getPassengers().subscribe(res => {
      this.passengers = res;
    });
  }


  handleEdit(event: Passenger){
    
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id == event.id){
        passenger = Object.assign({}, passenger, event);
      }
      return passenger
    })
    console.log(this.passengers);
  }

  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((passenger : Passenger) => {
      return (event.id !== passenger.id)
    })
    console.log(this.passengers);
  }
}
