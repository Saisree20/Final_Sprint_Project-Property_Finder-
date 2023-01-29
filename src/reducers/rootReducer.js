import { combineReducers } from "redux";

import {
    registerLogin,
    getLogin,
} from "./loginReducer";

import {
  addProperty,
  getProperty,
  getAllProperty,
  deleteProperty,
  updateProperty
} from "./propertyReducer"

import {
    purchaseProperty,
  getPropertyByCustomer,
  checkProperty
} from "./customerReducer"


const rootReducer = combineReducers({
    
    registerLogin,
    getLogin,
    addProperty,
    getProperty,
    getAllProperty,
    deleteProperty,
    updateProperty,
    purchaseProperty,
  getPropertyByCustomer,
  checkProperty
});

export default rootReducer;