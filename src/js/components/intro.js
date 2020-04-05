import React, { Component } from "react";
import marked from "marked";

class Intro extends Component {
  render() {
    return (
      <header id="intro">
        <h1>
          <i className={`mg ${this.props.icon}`}></i>
          {this.props.title}
        </h1>
        <p
          dangerouslySetInnerHTML={{ __html: marked(this.props.description) }}
        />
      </header>
    );
  }
}

export default Intro;
