import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(state => ({
      collapsed: !state.collapsed
    }));
  }

  render() {
    let collapsed_class = this.state.collapsed ? "" : "open";

    return (
      <section className="navigation">
        <a className={`toggle ${collapsed_class}`} onClick={this.toggleMenu} />
        <div className={`menu ${collapsed_class}`}>
          <a href="#pa" title="Skip to Pennsylvania" className="pa nav-icon">
            <i className="mg map-us-pa"></i>
          </a>
        </div>
      </section>
    );
  }
}

export default Navigation;
