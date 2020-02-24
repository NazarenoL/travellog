import React, { Component } from "react";

class Region extends Component {
  render() {
    return (
      <>
        <div className="section">
          <i className={`mg ${this.props.icon}`}></i>
          <h2>{this.props.title}</h2>
        </div>
        {this.props.children}
      </>
    );
  }
}

export default Region;
