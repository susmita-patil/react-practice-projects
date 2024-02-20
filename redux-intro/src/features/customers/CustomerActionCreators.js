import { CUSTOMER_CREATECUSTOMER, CUSTOMER_UPDATENAME } from "../Constants";

export const createCustomer = (fullName, nationalID) => {
  return {
    type: CUSTOMER_CREATECUSTOMER,
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
};

export const updateName = (fullName) => {
  return {
    type: CUSTOMER_UPDATENAME,
    payload: fullName,
  };
};
