// Import from NPM
// -------------------------------------
import React from "react";

// Import from component
// -------------------------------------
import LeftBar from "./LeftBar.react";
import Cards from "./Cards.react";

export default class FeaturedProducts extends React.Component {
    render() {
        return (
            <div>
                <div className="p-2" style={{ marginTop: "9%" }}>
                    <div className="row">
                        <div className="col-md-2 d-none d-sm-none d-lg-block d-md-block">
                            <LeftBar
                                materials={this.props.materials}
                                colors={this.props.colors}
                            />
                        </div>
                        <div className="col-md-10 col-sm-12">
                            <Cards
                                {...this.props}
                                isFeatured={true}
                            />
                        </div>
                    </div>
                </div>
            </div >
        )

    }
}