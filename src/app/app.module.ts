import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { counterReducer } from './store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  // NOTE: IT IS here WHERE THE STORE is created within the StoreModule
  // HENCE therefore must pass it a object with the initialState
  // Must provide a key that the web-app understands is the key associated with the value of the reducer state
  // Assign counter state to be reduced by the counterReducer
  // can have multiple reducers as well
  imports: [BrowserModule, StoreModule.forRoot({
    counter: counterReducer
    // auth: authReducer
  }, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
