import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from '../../models/Passenger';
import { PassengerDashboardService } from '../passenger-dashboard/passenger-dashboard.service';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {

  passenger : Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    // initial version (hardcoded with 1)
    // this.passengerService.getPassenger(1).subscribe(res => {
    //   this.passenger = res;
    // });


    // now, if u do "/passenger/1" or "/passenger/2" , it will go to respective passenger

    this.route.params.subscribe(res =>{
      // console.log(res);
      this.passengerService.getPassenger(res.id)
      .subscribe(res => {
      this.passenger = res;
      });
    })



  }

  handleUpdate(updated: Passenger){
    console.log(updated);
    this.passengerService.updatePassenger(updated).subscribe(res =>{
      this.passenger = Object.assign({}, this.passenger, updated);
    })

  }

  goBack(){
    this.router.navigate(['/passengers']); // note how we put '/passengers' within square braces
  }

}
