import React, { Component } from "react";

class Navigation extends Component {
  state = { collapsed: true };

  toggleMenu = () => {
    this.setState(state => ({
      collapsed: !state.collapsed
    }));
  };

  render() {
    let collapsed_class = this.state.collapsed ? "" : "open";

    return (
      <div className="navigation">
        <a className={`toggle ${collapsed_class}`} onClick={this.toggleMenu} />
        <div className={`menu ${collapsed_class}`}>
          <a href="#pa" title="Skip to Pennsylvania" className="pa nav-icon">
            <i className="mg map-us-pa"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Navigation;
