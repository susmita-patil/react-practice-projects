import { CUSTOMER_CREATECUSTOMER, CUSTOMER_UPDATENAME } from "../Constants";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case CUSTOMER_CREATECUSTOMER:
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case CUSTOMER_UPDATENAME:
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
};
