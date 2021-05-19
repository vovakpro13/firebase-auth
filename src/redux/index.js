import {combineReducers, createStore} from "redux";
import authReducer from "./authReducer";

const reducers = combineReducers({
    auth: authReducer
});

export default createStore(reducers)