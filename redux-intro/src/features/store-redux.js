import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { accountReducer } from "./accounts/AccountReducer";
import { customerReducer } from "./customers/CustomerReducer";
// import { deposit } from "./accounts/AccountActionCreators";
// import { createCustomer, updateName } from "./customers/CustomerActionCreators";

//combining reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// Create store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// console.log(store.getState());
// use store
// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 500,
//     purpose: "buy a car",
//   },
// });
// console.log(store.getState());

// store.dispatch(deposit(500));
// console.log(store.getState());
// store.dispatch(withdraw(200));
// console.log(store.getState());
// store.dispatch(requestLoan(5000, "buy car"));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());

// store.dispatch(createCustomer("susmita patil", "2906"));
// console.log(store.getState());
// store.dispatch(updateName("susmita Rajendra patil"));
// console.log(store.getState());

export default store;
