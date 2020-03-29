import React, { Component } from "react";
import marked from "marked";

class Intro extends Component {
  render() {
    return (
      <section id="intro" className="active">
        <h2>
          <i className={`mg ${this.props.icon}`}></i>
          {this.props.title}
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: marked(this.props.description) }}
        />
      </section>
    );
  }
}

export default Intro;
