import { combineReducers } from "redux";
import { EmailReducers } from "./email.reducers";

const RootReducers = combineReducers({
    email: EmailReducers
});

export default RootReducers;