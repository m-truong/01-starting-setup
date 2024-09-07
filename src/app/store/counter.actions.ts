// note: these are reserved 'EVENTS' in NgRx that will HANDLE CALLING THE REDUCERS THEMSELVES

// This couner action file WILL HANDLE calling the REDUCER which CREATED THE INITIAL STATE

// This DEFINES THE ACTIONS that will HANDLE calling the REDUCERS

// Always NEEDS A STRING which defines the UNIQUE IDENTIFIER FOR UNIQUE ACTIONS
// ADD PREFIX using (BEST CONVENTION)
// This is BEST PRACTICE that identifies the [square brackets] for the Feature THIS ACTION EVENT is associate WITH
// Then Increment for the FEATURE RELATED ACTION

import { createAction } from "@ngrx/store"

// under the hood - this is actually an exported function
export const incrementActionEvent = createAction('[Counter] Increment')