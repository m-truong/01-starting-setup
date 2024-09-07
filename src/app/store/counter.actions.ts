// note: these are reserved 'EVENTS' in NgRx that will HANDLE CALLING THE REDUCERS THEMSELVES

// This couner action file WILL HANDLE calling the REDUCER which CREATED THE INITIAL STATE

// This DEFINES THE ACTIONS that will HANDLE calling the REDUCERS

// Always NEEDS A STRING which defines the UNIQUE IDENTIFIER FOR UNIQUE ACTIONS
// ADD PREFIX using (BEST CONVENTION)
// This is BEST PRACTICE that identifies the [square brackets] for the Feature THIS ACTION EVENT is associate WITH
// Then Increment for the FEATURE RELATED ACTION


// under the hood - this is actually an exported function
// ÷second argument is actually a function called PROPS that DEFINES the type of DATA that can be DISPATCHED with the ACTION-EVENT
// props() is a GENERIC-function that has angle-brackets of an object with the CUSTOM-KEY

import { Action, createAction, props } from "@ngrx/store"

export const incrementActionEvent = createAction(
    '[Counter] Increment',
    props<{value: number}>()
    // NOTE that the PROPS() function takes an OBJECT with KEY-VALUE pairs
);

// alternative way of defining an action
// and generates an action Object

// STORED HARD-CODED VALUES
// export const INCREMENT = '[Counter] Increment';

// export class IncrementAction implements Action {
//     // hardcode the type
//     readonly type = INCREMENT;

//     constructor(public value: number) {}
// }

// // typescript has a cheat-shortcut of deining multiple types into a single type
// // LEARNED ABOUT TYPESCRIPT UNION TYPES
// export type CounterActions = IncrementAction;