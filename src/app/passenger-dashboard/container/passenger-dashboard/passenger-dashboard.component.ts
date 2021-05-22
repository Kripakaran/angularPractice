import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/Passenger';



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

  constructor(){
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
    this.passengers = [{
      id: 1,
      name: 'Kripa',
      checkedIn: true,
      checkedDate: 1490742000000,
      children: [{
        name: 'xxx',
        age: 12
      }
    ]
    },
    {
      id: 2,
      name: 'Karan',
      checkedIn: false,
      children: [{
        name: 'xxx',
        age: 12
      },
        {
          name: 'xyz',
          age: 14
        }
    ]
    },
    {
      id: 3,
      name: 'Prabhakaran',
      checkedIn: true,
      checkedDate: 1491606000000
    }
  ]
  
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
