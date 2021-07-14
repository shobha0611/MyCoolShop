
// Import from NPM
// -------------------------------------
import React, { Component } from "react";

// Import from component 
// -------------------------------
import ProductContainer from "./Products/ProductContainer.react";
class App extends Component {

  render() {
    return (
      <div>
        <ProductContainer />
      </div>
    );
  }
}


export default App;