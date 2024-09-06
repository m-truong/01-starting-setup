// NOTE: 'on()' IS EXTREMELY SPECIAL RESERVED KEYWORD USED IN NGRX
// IT is used with the REDUCER to LISTEN for CUSTOM DEFINED ACTIONS
// HIWHC ARE USED INSIDE THE REDUCER
// SO THE REDUCER IS THE HOUSING FUNCTION THAT WILL LISTEN FOR THE ACTION STRINGS USCH AS , '[Counter] Increment'
// the FEATURE always encapsulated INSIDE the square brackets syntax []
import { createReducer, on } from '@ngrx/store'
import { incrementActionEvent } from './counter.actions';
// Note: Reducers are important for initially setting up data

// Note: This is important reducer for managinging the 'Counter'- state'
// Reducer is just a function that takes data-state as input and spits out the new reduced state

// NgRx anything can be any TYPE OF INITIAL STATE
// Best practice is to just leave the initialState as a separate Variable
const initialState = 0

// Note: MUST export the REDUCER
export const counterReducer = createReducer(

    // now the counterReducer will PASS the CURRENT-STATE into the SECOND PARAMETER OF THE on()
    // The current state WILL BE PASSED INTO the second FUNCTION
    //  and then that SECOND FUNCTION IS RESPONSIBLE FOR UPDATING THE STATE
    // So THE DISPATCHED EVENTS ARE PREDEFINED
    // MUST ALWAYS RETURN THE NEW STATE but it DON'T MUTATE THE ORIGINAL STATE
    //  WHICH IS WHY IT'S ALWAYS CALLED THE INITIAL STATE
    // DON'T MUTATE INITIAL STATE
    // JUST RETURN A NEW STATE
    initialState, on(incrementActionEvent, (state) => {
        console.log(state);
        // KEY CONCEPT IS THAT NGRX UNDER THE HOOD WILL AUTOMATICALLY UPDATE THE STATE FOR THIS SLICE OF DATA WITH THIS NEW STATE
        return state + 1;
    })
);

// Note Alternative method of creating a reducers using any version of ngRx
// state=initialState is default value
// export function counterReducer(state = initialState) {
//     return state;
// }