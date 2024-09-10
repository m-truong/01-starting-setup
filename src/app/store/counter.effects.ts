import { Actions, createEffect, ofType } from "@ngrx/effects";
import  { selectCount } from './counter.selectors'
import { decrementActionEvent, incrementActionEvent, initActionEvent, setActionEvent } from "./counter.actions";
import { Injectable } from "@angular/core";

import {of, switchMap, tap, withLatestFrom} from 'rxjs'
import { Store } from "@ngrx/store";

@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions, private store: Store<{counter:number}>) {}

    saveCount = createEffect(() => this.actions$.pipe(
        ofType(incrementActionEvent, decrementActionEvent),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
            console.log(action);
            localStorage.setItem('count', counter.toString());
        })
    ), {dispatch: false});

    loadCount = createEffect(() => this.actions$.pipe(
        ofType(initActionEvent),
        // switches TO A NEW OBSERVABLE CHAIN
        switchMap(() => {
            const storedCounter = localStorage.getItem('count');
            if (storedCounter) {
                return of(setActionEvent({value: +storedCounter}));
            }
            return of(setActionEvent({value: 0}))
        })
    ))

}

    // This is an Effects Class that is NgRx reducer class boilerplate
    // After creating a sideEffect method from the class that WILL BE LOADED into the EffectsModule([]).forRoot()
    // Then it'll be ANOTHER EVENT HANDLER THAT'LLwait for ofType(incrementActionEvent) or decrementActionEvent befoer it performs THESE SIDE EFFECTS
    // send a pipeline that will UPDATE OR CALL A REDUCER FUNCTION
    // tap DOESN'T RETURN AN OBSERVABLE
    // LOCAL STORAGE SET ITEM in the localStorage to 'conut' property and the ACTION.VALUE.TOSTRING()
    // this saves it as a string
    // THESE ARE ALL ASYNC EVENTS


    // TYPICALLY THERE'S AOTHER DISPATCHED ACTION TO THE REDUCER
    // FUNNELED INTO THER REDUCER
    // OMG these are all ASYNCHRONOUS DISPATCHED REDUCER FUNCCTION ACTION EVENTS
    // THAT YOU CAN ASYNCHRONOLSY SELECT SLICES OF THE DATA-STORE
