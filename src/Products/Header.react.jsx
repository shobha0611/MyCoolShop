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
    render() {
        return (
            <div className="header">
                <h3 className="text-center p-4">
                    MYCOOLSHOOP.COM
                </h3>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#ededed" }}>
                    <a className="navbar-brand" href="/" style={{ fontSize: "1em" }}>
                        All Products
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand" href="/featuredProducts" style={{ fontSize: "1em" }}>
                            Featured Products
                        </a>
                    </div>
                    <div>
                        <div className="navbar-brand" style={{ fontSize: "1.7em" }}>
                            <i className="fa fa-shopping-cart">

                                <span className="badge badge-light">{this.props.totalItems}</span>
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
