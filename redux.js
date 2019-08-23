// TYPES
// Constants that tell the reducer how to behave
const PLUS_ONE = 'PLUS_ONE';
const MINUS_ONE = 'MINUS_ONE';
const RESET_STATE = 'RESET_STATE';

// ACTIONS
// Functions that get called by `dispatch()`
//   They return a JS object that contains a type
//   This object is sent to the reducer
const plusOne = () => ({ type: PLUS_ONE });
const minusOne = () => ({ type: MINUS_ONE });
const resetState = () => ({ type: RESET_STATE });

// REDUCER
// This is where the actual `work` takes place
//   After determining what needs to be done (via type)
//   A new state is returned
//   -- state is immutable and should never be directly modified
const reducer = (state = 0, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return state + 1;
    case MINUS_ONE:
      return state - 1;
    case RESET_STATE: 
      return 0;
    default:
      return state;
  }
}

// CREATE STORE
// Our store is where our state lives
//   Also gives us access to create subscribers & dispatchers
const store = Redux.createStore(reducer);

// TEST LISTENER
// Subscribers are listeners that let you know when
//   an action has occured
store.subscribe(() => {
  const state = store.getState();
  // open the console to see the value of
  // state after each dispatch is executed
  console.log(state);
});

// TEST DISPATCHERS
// Dispatchers are how we interact with our state
//   Here we dispatch an action function
//   Which returns a type to our reducer
//   After state has been set, any subscribers are triggered
store.dispatch(plusOne()); // 1
store.dispatch(plusOne()); // 2
store.dispatch(minusOne()); // 1
store.dispatch(plusOne()); // 2
store.dispatch(resetState()); // 0
