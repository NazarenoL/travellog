import React, { Component } from "react";
import marked from "marked";

import { settings } from "../content";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(settings.footer ?? "")
          }}
        />
        <p>
          Want to make a site like this?
          <br />
          <a
            title="Travel Log GitHub Repository"
            href="https://github.com/nazarenol/travellog"
          >
            Grab the code
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
