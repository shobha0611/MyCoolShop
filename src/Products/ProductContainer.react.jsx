import React, { Component } from "react";
import { connect } from "react-redux";

import ProductsAction from "./redux/Products.action.react";

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import from component 
// -------------------------------
import Header from "./Header.react";
import AllProducts from "./components/AllProducts.react";
import FeaturedProducts from "./components/featuredProducts.react";
import LeftBar from "./components/LeftBar.react";

export class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeArticle: {},
            addCart: [],
            activeTab: true,
            totalItems: 0,
            filteredProduct: [],
            filteredProducts: false,
            product: null
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
        let cartData = this.state.addCart || [];
        cartData.push(p);
        localStorage.setItem('myCart', JSON.stringify(cartData));

        const cartItems = JSON.parse(localStorage.getItem("myCart"));
        this.setState({ addCart: cartItems });
    }

    flilterdMaterial = (p) => {
        let productData = this.props.products.map(m => {
            if (p !== null) {
                if (p.id === m.materialId) {
                    this.setState({ filteredProducts: true })
                    return m;
                }
            }
            else {
                return m;
            }
            return null;
        });
        this.setState({ product: productData });
    }
    render() {
        let cartItemCount = this.state.addCart === null ? 0 : this.state.addCart.length
        return (
            <div>
                <div>
                    <Header
                        totalItems={cartItemCount}
                        materials={this.props.materials}
                        colors={this.props.colors}
                    />
                </div>
                <div>
                    <div className="row" style={{ marginTop: "11%", width: "100%" }}>
                        <div className="col-md-2 d-none d-sm-none d-lg-block d-md-block">
                            <LeftBar
                                products={this.props.products}
                                materials={this.props.materials}
                                colors={this.props.colors}
                                addToCart={this.addToCart}
                                featuredProducts={this.props.featuredProducts}
                                flilterdMaterial={this.flilterdMaterial}
                            />
                        </div>
                        <div className="col-md-10 col-sm-12">
                            <Router>
                                <Route>
                                    <div>
                                        <Route
                                            exact
                                            path={"/"}
                                            component={() => (
                                                <AllProducts
                                                    products={this.state.filteredProducts ? this.state.product : this.props.products}
                                                    materials={this.props.materials}
                                                    colors={this.props.colors}
                                                    addToCart={this.addToCart}
                                                    featuredProducts={this.props.featuredProducts}
                                                />)}
                                        />
                                        <Route
                                            path={"/featuredProducts"}
                                            component={() => (
                                                <FeaturedProducts
                                                    featuredProducts={this.props.featuredProducts}
                                                    products={this.state.filteredProducts ? this.state.product : this.props.products}
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
                    </div>
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