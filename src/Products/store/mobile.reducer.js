// Import from NPM
// -------------------------------------
import { combineReducers } from "redux";

// Import Reducer Routes
// -------------------------------------
import { ProductReducer } from "../redux/Product.reducer.react";

let RootReducer = combineReducers({
    Products: ProductReducer,
});

export { RootReducer };
