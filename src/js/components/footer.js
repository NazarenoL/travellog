import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="section end">
        <p>
          <strong>This is not a travel guide.</strong> This is a log of my
          experiences traveling, and so, it shows what I, Naz, experienced and
          felt in these places. You may disagree in many things, and that's ok.
          You may enjoy similar things as me, and then this could help you plan
          your trip.
        </p>
        <h4 className="h2">The end</h4>
        <p>
          Travel Log by Nazareno Lorenzo, based on a Design by
          <a href="https://laurenhallden.com" title="Lauren Hallden, Designer">
            Lauren Hallden
          </a>
          .
        </p>
        <p>
          Want to make one of these?
          <br />
          <a
            title="Travel Log GitHub Repo"
            href="https://github.com/nazarenol/travellog"
          >
            Grab the code
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
