import studentReducer from "./myReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ studentReducer });

export default rootReducer;
