import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store/src';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor( private store : Store<{counter :{counter:number}}>) { 
    console.log(store);
  }

  ngOnInit():void {
  }
  onIncrement(){

  }

  onDecrement(){

  }

  onReset(){

  }
}