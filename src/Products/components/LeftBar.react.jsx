// Import from NPM
// -------------------------------------
import React from "react";

export default class LeftBar extends React.Component {
   
    render() {
        return (
            <div>
                <div>
                    <h6>Tags</h6>
                    <div>All</div>
                    <div>Generic</div>
                    <div>Generic</div>
                    <div>Generic</div>
                    <div>Generic</div>
                </div>
                <br />
                <div>
                    <h6>Materials</h6>
                    <div>All</div>
                    {this.props.materials.map((material, idx) =>
                        <div key={idx}> {material.name}</div>
                    )
                    }
                </div>
                <br />
                <div>
                    <h6>Colors</h6>
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