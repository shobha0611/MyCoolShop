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
            addCart: [],
            activeTab: true,
            totalItems: 0
        };
    }

    componentDidMount() {
        const cartItems =
            JSON.parse(localStorage.getItem("myCart"));
        this.setState({ addCart: cartItems });

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

    addToCart = (p) => {
        this.state.addCart = this.state.addCart || [];
        this.state.addCart.push(p);
        localStorage.setItem('myCart', JSON.stringify(this.state.addCart));

        const cartItems = JSON.parse(localStorage.getItem("myCart"))
        this.setState({ addCart: cartItems });
    }
    render() {
        const path = [
            { tab1: "/" },
            { tab2: "/featuredProducts" }
        ]
        let cartItemCount = this.state.addCart === null ? 0 : this.state.addCart.length
        return (
            <div style={{ paddingBottom: "60px" }}>
                <Header
                    totalItems={cartItemCount}
                />
                <div className="p-2 mt-4">
                    <Router>
                        <Route>
                            <div>
                                <Route
                                    exact
                                    path={path.tab1}
                                    component={() => (
                                        <AllProducts
                                            {...this.props}
                                            products={this.props.products}
                                            materials={this.props.materials}
                                            colors={this.props.colors}
                                            addToCart={this.addToCart}
                                        />)}
                                />
                                <Route
                                    path={path.tab2}
                                    component={() => (
                                        <FeaturedProducts
                                            featuredProducts={this.props.featuredProducts}
                                            products={this.props.products}
                                            materials={this.props.materials}
                                            colors={this.props.colors}
                                            addToCart={this.addToCart}
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