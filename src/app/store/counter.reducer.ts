import {createReducer } from '@ngrx/store'
// Note: Reducers are important for initially setting up data

// Note: This is important reducer for managinging the 'Counter'- state'
// Reducer is just a function that takes data-state as input and spits out the new reduced state

// NgRx anything can be any TYPE OF INITIAL STATE
// Best practice is to just leave the initialState as a separate Variable
const initialState = 0

// Note: MUST export the REDUCER
export const counterReducer = createReducer(
    initialState
);