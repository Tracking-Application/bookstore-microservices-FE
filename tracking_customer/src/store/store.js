import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../slice/common/registerSlice";
import loginReducer from "../slice/common/loginSlice";
import profileReducer from "../slice/user/profileSlice";
import userHomeReducer from "../slice/user/userHomeSlice";
import productDetailsReducer from "../slice/user/productDetailsSlice";
import paymentReducer from "../slice/user/paymentSlice";
import myOrdersReducer from "../slice/user/myOrdersSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    profile: profileReducer,
    userHome: userHomeReducer,
    productDetails: productDetailsReducer,
    payment: paymentReducer,
    myOrders: myOrdersReducer,
  },
});

export default store;
