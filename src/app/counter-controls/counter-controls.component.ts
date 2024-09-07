import { Component } from '@angular/core';
import { incrementActionEvent } from '../store/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    // note this store has a pre-defined dispatch method built into the store
    // note m
    this.store.dispatch(incrementActionEvent())
  }

  decrement() {
  }
}
