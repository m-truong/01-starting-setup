// Note: this entire file consists of just selectors for the Store

import { createSelector } from "@ngrx/store";

// this just defines a custom function that accepts a variable of a specific type shape
// this under the hood
// defining an arrow function means that it'll accept the variable as a parameter
// and then it'll output the variable with the counter property on the object 'state'
export const selectCount = (state: { counter: number }) => state.counter ;
export const selectDoubleCount = createSelector(
    selectCount,
    (state) => state * 2
);