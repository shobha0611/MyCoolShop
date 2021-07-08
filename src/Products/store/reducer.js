import { REHYDRATE } from "redux-persist/constants";
import { FETCH_PRODUCTS, FETCH_MATERIAL, FETCH_COLOR, FEATURED_PRODUCT } from "./reduxConstant";

const initialBlogState = {
    products: [],
    materials: [],
    colors: [],
    featuredProducts: []
};
const ProductReducer = (state = initialBlogState, action) => {
    switch (action.type) {
        case REHYDRATE:
            let products = action.payload.reducer;
            if (products) {
                return { ...state, ...products };
            } else {
                return state;
            }
        case FETCH_PRODUCTS:
            if (action.status === "fetching") {
                return { ...state, fetchCompleted: false, error: null };
            } else if (action.status === "success") {
                return { ...state, products: action.data.products };
            } else {
                return { ...state, error: action.err, fetchCompleted: true };
            }
        case FETCH_MATERIAL:
            if (action.status === "fetching") {
                return { ...state, fetchCompleted: false, error: null };
            } else if (action.status === "success") {
                return { ...state, materials: action.data.materials };

            } else {
                return { ...state, error: action.err, fetchCompleted: true };
            }
        case FETCH_COLOR:
            if (action.status === "fetching") {
                return { ...state, fetchCompleted: false, error: null };
            } else if (action.status === "success") {
                return { ...state, colors: action.data.colors };

            } else {
                return { ...state, error: action.err, fetchCompleted: true };
            }
        case FEATURED_PRODUCT:
            if (action.status === "fetching") {
                return { ...state, fetchCompleted: false, error: null };
            } else if (action.status === "success") {
                return { ...state, featuredProducts: action.data.featuredProducts };

            } else {
                return { ...state, error: action.err, fetchCompleted: true };
            }
        default:
            return state;
    }
};
export { ProductReducer };
