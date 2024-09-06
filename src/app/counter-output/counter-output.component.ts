import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

// Note: That by simply using a Store, we can remove the CoutnerServiceSubscription to wathc the state of the counter
// INSTEAD that app-wide counter-state is being maintained VIA THE STORE
// import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  // counter = 0;
  // counterServiceSub?: Subscription;

  // Must DECORATE with $-sign if those properties STORE an OBSERVABLE
  count$: Observable<number>;

  constructor(private store: Store) {}

}
