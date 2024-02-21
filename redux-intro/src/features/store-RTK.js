import { configureStore } from "@reduxjs/toolkit";

// import { accountReducer } from "./accounts/AccountReducer";
import accountReducer from "./accounts/AccountSliceRTK";
// import  {customerReducer } from "./customers/CustomerReducer";
import customerReducer from "./customers/CustomerSliceRTK";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
