import { Component } from '@angular/core';
import { decrementActionEvent, incrementActionEvent } from '../store/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  // note this store has a pre-defined dispatch method built into the store
  // note m
  increment() {
    // note how must pass an OBJECT with matching key for the props value
    // this.store.dispatch(incrementActionEvent({value: 2}))
    // note this is called ActionsObjects!!!
    this.store.dispatch(incrementActionEvent({value: 2}))
  }

  decrement() {
    this.store.dispatch(decrementActionEvent({value: 2}))
  }
}
