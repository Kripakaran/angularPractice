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

  editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(name: string){
    this.details.name = name;
  }

  toggleEdit(){
    this.editing = !this.editing;
  }
}
