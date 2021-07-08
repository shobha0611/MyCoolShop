import {
    FETCH_PRODUCTS,
    FETCH_MATERIAL,
    FETCH_COLOR,
    FEATURED_PRODUCT
} from "../store/reduxConstant";

const _fetchproducts = (status, data, err) => {
    return {
        type: FETCH_PRODUCTS,
        data,
        err,
        status,
    };
};

const _fetchMaterial = (status, data, err) => {
    return {
        type: FETCH_MATERIAL,
        data,
        err,
        status,
    };
};

const _fetchcolor = (status, data, err) => {
    return {
        type: FETCH_COLOR,
        data,
        err,
        status,
    };
};

const _featuredProducts = (status, data, err) => {
    return {
        type: FEATURED_PRODUCT,
        data,
        err,
        status,
    };
};

const fetchAllProducts = () => {
    return (dispatch, getState, Request) => {
        let dataPath = "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products";
        dispatch(_fetchproducts("fetching", null, null));
        return fetch(dataPath)
            .then((response) => {
                return response.json().then((data) => {
                    return dispatch(
                        _fetchproducts("success", { products: data.products }, null, null)
                    );
                });
            })
            .catch((err) => {
                dispatch(_fetchproducts("error", null, err));
                return Promise.reject(err);
            });
    }
};

const fetchFeaturedProducts = () => {
    return (dispatch, getState, Request) => {
        let dataPath = "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured";
        dispatch(_featuredProducts("fetching", null, null));
        return fetch(dataPath)
            .then((response) => {
                return response.json().then((data) => {
                    return dispatch(
                        _featuredProducts("success", { featuredProducts: data.featured }, null, null)
                    );
                });
            })
            .catch((err) => {
                dispatch(_featuredProducts("error", null, err));
                return Promise.reject(err);
            });
    }
};

const fetchMaterial = () => {
    return (dispatch, getState, Request) => {
        let materialsPath = "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material";
        dispatch(_fetchproducts("fetching", null, null));
        return fetch(materialsPath)
            .then((response) => {
                return response.json().then((data) => {
                    return dispatch(
                        _fetchMaterial("success", { materials: data.material }, null, null)
                    );
                });
            })
            .catch((err) => {
                dispatch(_fetchMaterial("error", null, err));
                return Promise.reject(err);
            });
    }
};
const fetchColors = () => {
    return (dispatch, getState, Request) => {
        let colorsPath = "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors";
        dispatch(_fetchcolor("fetching", null, null));
        return fetch(colorsPath)
            .then((response) => {
                return response.json().then((data) => {
                    return dispatch(
                        _fetchcolor("success", { colors: data.colors }, null, null)
                    );
                });
            })
            .catch((err) => {
                dispatch(_fetchcolor("error", null, err));
                return Promise.reject(err);
            });
    }
};


class ProductsAction {
    static fetchAllProducts = fetchAllProducts;
    static fetchFeaturedProducts = fetchFeaturedProducts;
    static fetchMaterial = fetchMaterial;
    static fetchColors = fetchColors;
}

export default ProductsAction;
