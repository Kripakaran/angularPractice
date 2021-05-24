import { Component, Input, OnInit } from '@angular/core';
import { Baggage } from '../../models/Baggage';
import { Passenger } from '../../models/Passenger';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {


  @Input()
  detail: Passenger;

  baggage : Baggage[] = [
    {
      key: 'none',
      value: 'No Luggage'
    },
    {
      key: 'hand',
      value: 'Hand Luggage'
    },
    {
      key: 'hold',
      value: 'Hold Luggage'
    },
    {
      key: 'hand-hold',
      value: 'Hand and Hold Luggage'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onCheckIn(checkedIn : boolean){
    if(checkedIn){
    this.detail.checkedDate = Date.now();
  }
}
}