// Import from NPM
// -------------------------------------
import React from "react";

export default class LeftBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div>
                    <h5>Tags</h5>
                    <div key="_all">All</div>
                    <div key="_a">Generic</div>
                    <div>Generic</div>
                    <div>Generic</div>
                    <div>Generic</div>
                </div>
                <br />
                <div>
                    <h5>Materials</h5>
                    <div>All</div>
                    {this.props.materials.map((material, idx) =>
                        <div key={idx}> {material.name}</div>
                    )
                    }
                </div>
                <br />
                <div>
                    <h5>Colors</h5>
                    <div>All</div>
                    {this.props.colors.map((color,i) =>
                        <div key={i}> {color.name}</div>
                    )
                    }
                </div>
            </div >
        )

    }
}