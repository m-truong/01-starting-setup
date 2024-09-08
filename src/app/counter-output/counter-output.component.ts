import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {

  count$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    this.count$=store.select('counter')
  }

}

// Note; Do NOT CALL REDUCERS yourself: instead must DISPATCH ACTIONS that WILL CALL THE REDCUERS

// Note: only add AsyncPipe import if USING standalone components
// import {AsyncPipe} from '@angular/common';

// Note: That by simply using a Store, we can remove the CoutnerServiceSubscription to wathc the state of the counter
// INSTEAD that app-wide counter-state is being maintained VIA THE STORE
// import { CounterService } from '../counter.service';

// counter = 0;
// counterServiceSub?: Subscription;

// Must DECORATE with $-sign if those properties STORE an OBSERVABLE
// Notice that the Observable is a Generic-Type and then the actual type is "number"
// TODO: output the counter app-wide state here using the store$

// TS compiling error doesn't KNOW the TYPE returned BY THE observable count$
// SO MUST DEFINE Store type inside THE CONSTRUCTOR DEFINITION
// inside the constructor when initializing the CounterOutputComponent
// You are initializing an internal property to the CounterOutputComponent instance using 'this.' property
// then assigning the this.count$ (Observable) syntax
// then the call store.select('') method will ALLOW this component to SELECT a PIECE of the STORE's MANAGED STATE
// which is TIED to the COUNTER-REDUCER managing THAT STATE

// Best practice is to always unsubscribe to any given observable
