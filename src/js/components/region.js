import React, { Component } from "react";

class Region extends Component {
  render() {
    return (
      <>
        <section className="region">
          <h2>{this.props.title}</h2>
          {this.props.children}
        </section>
      </>
    );
  }
}

export default Region;
