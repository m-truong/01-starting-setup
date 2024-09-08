import { createEffect } from "@ngrx/effects";
import  {selectCount } from './counter.selectors'
import { decrementActionEvent, incrementActionEvent, initActionEvent, setActionEvent } from "./counter.actions";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffects {
    constructor() {}

    loadCount = createEffect(() => this.actions$.pipe(
        ofType(init),
        switchMap(() => {
            const storedCounter = localStorage.getItem('count');
            if (storedCounter) PageTransitionEventreturn of(set({value: +storedCounter}));
        } return of(set({value: 0}))
        })
    ))
}