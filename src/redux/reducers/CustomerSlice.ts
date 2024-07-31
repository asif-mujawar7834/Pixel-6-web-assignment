import { createSlice } from "@reduxjs/toolkit";
import { defaultCustomersList } from "../../constants";
import { toast } from "react-toastify";

export interface customerType {
  id?: number;
  panNumber: string;
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  pincode: string;
  state: string;
  city: string;
}

interface initialStateType {
  selectedCustomer: null | customerType;
  customers: customerType[];
}

const initialState: initialStateType = {
  selectedCustomer: null,
  customers: defaultCustomersList,
};

const CustomerSlice = createSlice({
  name: "Customers",
  initialState: initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
      toast.success("Customer added successfully.");
    },
    deleteCustomer: (state, action) => {
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload.id
      );
      toast.success("Customer Deleted Successfully.");
    },
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = action.payload;
    },
    updateCustomer: (state, action) => {
      state.customers = state.customers.map((customer) => {
        if (customer.id === action.payload.id) {
          return action.payload;
        }
        return customer;
      });
      toast.success("Customer updated successfully.");
    },
  },
});

export const {
  addCustomer,
  deleteCustomer,
  setSelectedCustomer,
  updateCustomer,
} = CustomerSlice.actions;
export default CustomerSlice.reducer;
