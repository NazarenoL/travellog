import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          {this.props.chapters.map(chapter => (
            <Link
              to={"/" + chapter.slug}
              title={"Recommendations for " + chapter.content.title}
              className="menu-link"
              key={chapter.slug}
            >
              <i className={`mg ${chapter.content.mapFontIcon}`}></i>
              {chapter.content.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Navigation;
