import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../slice/common/registerSlice";
import loginReducer from "../slice/common/loginSlice";
import usersReducer from "../slice/admin/usersSlice";
import addProductReducer from "../slice/admin/addProductSlice";
import allProductsReducer from "../slice/admin/allProductsSlice";
import adminOrdersReducer from "../slice/admin/ordersSlice";
import adminHomeReducer from "../slice/admin/adminHomeSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    adminUsers: usersReducer,
    addProduct: addProductReducer,
    allProducts: allProductsReducer,
    adminOrders: adminOrdersReducer,
    adminHome: adminHomeReducer,
  },
});

export default store;
