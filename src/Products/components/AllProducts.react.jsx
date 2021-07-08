// Import from NPM
// -------------------------------------
import React from "react";
import LeftBar from "./LeftBar.react";
export default class AllProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allProducts: this.props.products,
            materials: this.props.materials,
            colors: this.props.colors,
        };
    }


    render() {
        return (
            <div>
                <div className="p-3" style={{ marginTop: "11%" }}>
                    <div className="row">
                        <div className="col-md-2">
                            <LeftBar
                                materials={this.state.materials}
                                colors={this.state.colors}
                            />
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                                {this.state.allProducts.map((product, idx) => {
                                    let materialId = this.state.materials.find(m =>
                                        m.id === product.materialId
                                    );
                                    let colorId = this.state.colors.find(c =>
                                        c.id === product.colorId
                                    );
                                    let mId = materialId !== undefined ? materialId.name : "No materials"
                                    let cId = colorId !== undefined ? colorId.name : "No colors"
                                    return (
                                        <div className="col-lg-4 col-sm-1 mb-4" key={idx}>
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
                                                    <div className="card-body">
                                                        <h5 className="mb-1">{product.name}</h5>
                                                        <p>
                                                            <span> {mId} </span>
                                                            <span className="pl-3"> {cId} </span>
                                                        </p>
                                                        <p className="card-text">INR {product.price}</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )

    }
}