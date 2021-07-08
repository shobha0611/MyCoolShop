
// Import from NPM
// -------------------------------------
import React, { Component } from "react";

// Import from component 
// -------------------------------
import ProductContainer from "./Products/ProductContainer.react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rehydrated: false,
      totalCartItems: 0
    };
  }

  render() {
    return (
      <div style={{ paddingBottom: "60px" }}>
        <ProductContainer />
      </div>
    );
  }
}


export default App;