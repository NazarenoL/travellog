import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <section className="navigation">
        <a className="toggle"></a>
        <div className="menu">
          <a href="#pa" title="Skip to Pennsylvania" className="pa nav-icon">
            <i className="mg map-us-pa"></i>
          </a>
        </div>
      </section>
    );
  }
}

export default Navigation;
