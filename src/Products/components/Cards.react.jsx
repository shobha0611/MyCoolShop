// Import from NPM
// -------------------------------------
import React from "react";
export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allProducts: this.props.products,
            materials: this.props.materials,
            colors: this.props.colors,
            featuredProducts: this.props.featuredProducts,
            filteredProduct: []
        };
    }


    render() {
        this.state.allProducts.map(product =>
            this.state.featuredProducts.find(m => {
                if (m.productId === product.id) {
                    return this.state.filteredProduct.push(product)
                }
                return null;
            })
        );
        let filderData = this.props.isFeatured === false
            ? this.state.allProducts
            : this.state.filteredProduct
        return (
            <div>
                <div className="p-3" >
                    <div className="row">
                        {filderData.map((product, idx) => {
                            let materialId = this.state.materials.find(m =>
                                m.id === product.materialId
                            );
                            let colorId = this.state.colors.find(c =>
                                c.id === product.colorId
                            );
                            let materialName = materialId !== undefined ? materialId.name : "One material"
                            let colorName = colorId !== undefined ? colorId.name : "One color"
                            return (
                                <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6 mb-4" key={idx}>
                                    <div>
                                        <div className="card border-0">
                                            <div className="img_Container">
                                                <div className="overlay" onClick={() => this.props.addToCart(product)}>
                                                    <div className="cartStyle">
                                                        Add to Cart
                                                    </div>
                                                </div>
                                                <img className="card-img-top" src={product.image} alt="" />
                                            </div>
                                            <div className="card-body" style={{ padding: "1rem 0" }}>
                                                <h5 className="mb-1">{product.name}</h5>
                                                <p style={{ fontSize: "0.9em" }}>
                                                    <span style={{ fontWeight: "500", }}> {materialName.toUpperCase()} </span>
                                                    <span className="pl-3"> {colorName.toUpperCase()} </span>
                                                </p>
                                                <p className="card-text" style={{ color: "#77343f" }}>INR {product.price}</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div >
        )

    }
}