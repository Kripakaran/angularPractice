import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../models/Passenger';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {



  @Input()
  details: Passenger;

  constructor() { }

  ngOnInit(): void {
  }

}
