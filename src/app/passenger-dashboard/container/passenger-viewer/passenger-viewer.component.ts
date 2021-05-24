import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/Passenger';
import { PassengerDashboardService } from '../passenger-dashboard/passenger-dashboard.service';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {

  passenger : Passenger;
  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengerService.getPassenger(1).subscribe(res => {
      this.passenger = res;
    });
  }

  handleUpdate(updated: Passenger){
    console.log(updated);
    this.passengerService.updatePassenger(updated).subscribe(res =>{
      this.passenger = Object.assign({}, this.passenger, updated);
    })

  }

}
