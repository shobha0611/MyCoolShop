// Import from NPM
// -------------------------------------
import React from "react";

// Import from component
// -------------------------------------
import LeftBar from "./components/LeftBar.react";

export default class Header extends React.Component {
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
                    <h5 className="text-center mb-0" style={{ padding: "20px" }}>
                        <a href="/">MYCOOLSHOOP.COM</a>
                    </h5>
                    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light p-3" style={{ background: "#ededed" }}>
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
                    <nav className="navbar navbar-inverse">
                        <div>
                            <div className="navbar-header">
                                <button className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <i className="fa fa-bars" />
                                </button>
                                <a className="text-center p-4" href="/">
                                    MYCOOLSHOOP.COM
                                </a>

                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar" style={{ background: "#fff" }}>
                                <ul className="nav navbar-nav pt-4">
                                    <p><a className="navbar-brand" href="/" style={{ fontSize: "1em" }}>
                                        All Products
                                    </a>
                                    </p>
                                    <p><a className="navbar-brand" href="/featuredProducts" style={{ fontSize: "1em" }}>
                                        Featured Products
                                    </a>
                                    </p>
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
