import React, { Component } from "react";
import { connect } from "react-redux";

import ProductsAction from "./redux/products.action.react";

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import from component 
// -------------------------------
import Header from "./Header.react";
import AllProducts from "./components/AllProducts.react";
import FeaturedProducts from "./components/featuredProducts.react";

export class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchCompleted: false,
            error: false,
            errorMessage: [],
            activeArticle: {},
        };
    }

    componentDidMount() {
        // const cartItems = localStorage.getItem("myCart") === null ? 0 : JSON.parse(localStorage.getItem("myCart"));

        // this.setState({ totalItems: cartItems });
        // console.log("totalItems", this.state.totalItems)
        this.props.actions.fetchAllProducts(this.props.products)
            .then(() => {
                this.props.actions.fetchMaterial()
            }).then(() => {
                this.props.actions.fetchColors()
            }).then(() => {
                this.props.actions.fetchFeaturedProducts()
            })
            .catch(e => {
                console.log(e);
            });
    }


    render() {
        return (
            <div style={{ paddingBottom: "60px" }}>
                <Header />
                <div className="p-2 mt-4">
                    <Router>
                        <Route>
                            <div>
                                <Route
                                    exact
                                    path="/"
                                    component={() => (
                                        <AllProducts
                                            {...this.props}
                                            products={this.props.products}
                                            materials={this.props.materials}
                                            colors={this.props.colors}
                                        />)}
                                />
                                <Route
                                    path="/featuredProducts"
                                    component={() => (
                                        <FeaturedProducts
                                            featuredProducts={this.props.featuredProducts}
                                            products={this.props.products}
                                            materials={this.props.materials}
                                            colors={this.props.colors}
                                        />
                                    )}
                                />
                            </div>
                        </Route>
                    </Router>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.Products.products,
        materials: state.Products.materials,
        colors: state.Products.colors,
        featuredProducts: state.Products.featuredProducts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            fetchAllProducts: () => {
                return dispatch(ProductsAction.fetchAllProducts());
            },
            fetchMaterial: () => {
                dispatch(ProductsAction.fetchMaterial());
            },
            fetchColors: () => {
                dispatch(ProductsAction.fetchColors());
            },
            fetchFeaturedProducts: () => {
                return dispatch(ProductsAction.fetchFeaturedProducts());
            },

        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);