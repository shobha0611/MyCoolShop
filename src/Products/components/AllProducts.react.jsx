// Import from NPM
// -------------------------------------
import React from "react";

// Import from component
// -------------------------------------
import Cards from "./Cards.react";
export default class AllProducts extends React.Component {
    render() {
        return (
            <Cards
                {...this.props}
                isFeatured={false}
            />
        )

    }
}