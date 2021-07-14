// Import from NPM
// -------------------------------------
import React from "react";

// Import from component
// -------------------------------------
import Cards from "./Cards.react";

export default class FeaturedProducts extends React.Component {
    render() {
        return (
            <div>
                <div className="p-2">
                    <Cards
                        {...this.props}
                        isFeatured={true}
                    />
                </div>
            </div >
        )

    }
}