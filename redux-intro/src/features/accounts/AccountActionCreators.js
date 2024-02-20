import {
  ACCOUNT_DEPOSIT,
  ACCOUNT_PAYLOAN,
  ACCOUNT_REQUESTLOAN,
  ACCOUNT_WITHDRAW,
} from "../Constants";

// action creators

export const deposit = (amount) => {
  return { type: ACCOUNT_DEPOSIT, payload: amount };
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
