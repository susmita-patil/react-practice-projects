import {
  ACCOUNT_DEPOSIT,
  ACCOUNT_PAYLOAN,
  ACCOUNT_REQUESTLOAN,
  ACCOUNT_WITHDRAW,
} from "../Constants";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case ACCOUNT_DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case ACCOUNT_WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case ACCOUNT_REQUESTLOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case ACCOUNT_PAYLOAN:
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};
