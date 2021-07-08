// Import from NPM
// -------------------------------------
import { combineReducers } from "redux";

// Import Reducer Routes
// -------------------------------------
import { ProductReducer } from "../store/reducer";

let RootReducer = combineReducers({
    Products: ProductReducer,
});

export { RootReducer };
