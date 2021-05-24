import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Passenger } from '../../models/Passenger';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit, OnChanges {

  @Input()
  details: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();


  @Output()
  view: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any){
    if(changes.details){
      this.details = Object.assign({}, changes.details.currentValue);
    }
    console.log(changes);
   }

  onNameChange(name: string){
    this.details.name = name;
  }

  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.details);
    }
    this.editing = !this.editing;
  }

  onRemove(){
    this.remove.emit(this.details);
  }

  toggleView(){
    this.view.emit(this.details);
  }
}
