import { combineReducers } from "@reduxjs/toolkit";

import ordersReducer, { name as ordersName } from "./orders";
import userReducer, { name as userName } from "./user";

const rootReducer = combineReducers({
  [ordersName]: ordersReducer,
  [userName]: userReducer,
});

export default rootReducer;
