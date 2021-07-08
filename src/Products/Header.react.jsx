// Import from NPM
// -------------------------------------
import React from "react";
import LeftBar from "./components/LeftBar.react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: 0
        };
    }
    render() {
        let cartStyle = {
            marginRight: "10px",
            position: "absolute",
            zIndex: "1",
            marginTop: " -56px",
            right: 0,
            fontSize: "1.2em"
        }
        let navcartStyle = {
            float: "right",
            fontSize: "1.4em"
        }
        return (
            <div>
                <div className="header d-none d-sm-none d-lg-block d-md-block">
                    <h4 className="text-center p-4">
                        <a href="/">MYCOOLSHOOP.COM</a>
                    </h4>
                    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light" style={{ background: "#ededed" }}>
                        <a className="navbar-brand" href="/" style={{ fontSize: "1em" }}>
                            All Products
                        </a>
                        <div>
                            <a className="navbar-brand" href="/featuredProducts" style={{ fontSize: "1em" }}>
                                Featured Products
                            </a>
                        </div>
                    </nav>
                    <div className="navbar-brand">
                        <i className="fa fa-shopping-cart" style={cartStyle}>
                            <span className="badge badge-light">{this.props.totalItems}</span>
                        </i>
                    </div>
                </div>
                <div className="headerResponsive d-sm-block d-lg-none d-md-none">
                    <div className="navbar-brand" style={navcartStyle}>
                        <i className="fa fa-shopping-cart">
                            <span className="badge badge-light">{this.props.totalItems}</span>
                        </i>
                    </div>
                    <nav class="navbar navbar-inverse">
                        <div>
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <i className="fa fa-bars" />
                                </button>
                                <a className="text-center p-4" href="/">
                                    MYCOOLSHOOP.COM
                                </a>

                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar" style={{ background: "#fff" }}>
                                <ul class="nav navbar-nav pt-4">
                                    <h5><a className="navbar-brand" href="/" style={{ fontSize: "1em" }}>
                                        All Products
                                    </a>
                                    </h5>
                                    <h5><a className="navbar-brand" href="/featuredProducts" style={{ fontSize: "1em" }}>
                                        Featured Products
                                    </a>
                                    </h5>
                                </ul>
                                <LeftBar
                                    materials={this.props.materials}
                                    colors={this.props.colors}
                                />
                            </div>
                        </div>
                    </nav>
                </div>

            </div >
        )

    }
}
