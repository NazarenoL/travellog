import React, { Component } from "react";

class Region extends Component {
  render() {
    return (
      <>
        <div className="section region">
          <h2>{this.props.title}</h2>
        </div>
        {this.props.children}
      </>
    );
  }
}

export default Region;