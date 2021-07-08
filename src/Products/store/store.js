// Import from NPM
// -------------------------------------
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { autoRehydrate, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Store Setup
// -------------------------------------
import { RootReducer } from "./mobile.reducer";

//-------------------------------------------------------------------------------------
// Create your app's store
//-------------------------------------------------------------------------------------
let initialState = {}
const Store = composeWithDevTools(
    applyMiddleware(thunkMiddleware.withExtraArgument()),
    autoRehydrate()
)(createStore)(RootReducer, initialState);

const getStore = () => Store.getState();

export { Store, persistStore, getStore };
