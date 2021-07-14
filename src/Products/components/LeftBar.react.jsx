// Import from NPM
// -------------------------------------
import React from "react";
export default class LeftBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allProducts: this.props.products,
            materials: this.props.materials,
            colors: this.props.colors,
            featuredProducts: this.props.featuredProducts,
            products: {},
            filterdProducts: false
        };
    }


    render() {
        return (
            <div className="mt-3 pl-3">
                <div>
                    <h6>Materials</h6>
                    <div onClick={() => this.props.flilterdMaterial(null)}>All</div>
                    {this.props.materials.map((material, idx) => {
                        return <div key={idx} onClick={() => this.props.flilterdMaterial(material)}> {material.name || "All"}</div>
                    })
                    }
                </div>
                <br />
                <div>
                    <h6>Colors</h6>
                    <div>All</div>
                    {this.props.colors.map((color, i) =>
                        <div key={i}> {color.name}</div>
                    )
                    }
                </div>
            </div >
        )

    }
}