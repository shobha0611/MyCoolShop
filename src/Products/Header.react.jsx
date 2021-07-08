// Import from NPM
// -------------------------------------
import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: 0
        };
    }
    // componentDidMount() {
    //     // window.addEventListener("message", this.receiveMessage, false);
    //     const cartItems = localStorage.getItem(null) ? 0 : JSON.parse(localStorage.getItem("myCart"));

    //     this.setState({ totalItems: cartItems });
    //     console.log("totalItems", this.state.totalItems)
    // }
    render() {
        return (
            <div>
                <h3 className="container text-center p-4">
                    MYCOOLSHOOP.COM
                </h3>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        All Products
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand" href="/featuredProducts">
                            Featured Products
                        </a>
                    </div>
                    <div>
                        <div className="navbar-brand" style={{ fontSize: "1.7em" }}>
                            <i className="fa fa-shopping-cart">

                                {/* <span className="badge badge-light">{cartItems.length}</span> */}
                            </i>
                        </div>
                    </div>
                </nav>
            </div>
        )

    }
}
// var routes = (
//     <Router>
//         <Route path='/' component={AllProducts}>
//             {/* <Route path='/home' component={Home} /> */}
//         </Route>
//     </Router>
// );

// module.exports = routes;
