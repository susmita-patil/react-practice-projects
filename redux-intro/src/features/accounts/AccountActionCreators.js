import {
  ACCOUNT_DEPOSIT,
  ACCOUNT_PAYLOAN,
  ACCOUNT_REQUESTLOAN,
  ACCOUNT_WITHDRAW,
  ACCOUNT_CONVERTINGCURRENCY,
} from "../Constants";

// action creators

export const deposit = (amount, currency) => {
  if (currency === "USD") return { type: ACCOUNT_DEPOSIT, payload: amount };

  // async action to convert currency: use thunk
  return async function (dispatch, getState) {
    dispatch({ type: ACCOUNT_CONVERTINGCURRENCY });
    const host = "api.frankfurter.app";
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({ type: ACCOUNT_DEPOSIT, payload: converted });
  };
};
export const withdraw = (amount) => {
  return { type: ACCOUNT_WITHDRAW, payload: amount };
};
export const requestLoan = (amount, purpose) => {
  return { type: ACCOUNT_REQUESTLOAN, payload: { amount, purpose } };
};
export const payLoan = () => {
  return { type: ACCOUNT_PAYLOAN };
};
