import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Image1x1 from '../../images/image-1x1.jpg'
import Image2x1 from '../../images/image-2x1.jpg'
import Image3x1 from '../../images/image-3x1.jpg'
import Map from './map'

class App extends Component {
  render() {
    return (
      <>
        <Map />
        <div id="writing">
          <section className="navigation">
            <a className="toggle"></a>
            <div className="menu">
              <a href="#pa" title="Skip to Pennsylvania" className="pa nav-icon"><i className="mg map-us-pa"></i></a>
            </div>
          </section>

          <section id="intro" className="active">
            <h1>My Travel Log: 2018</h1>
            <p>Say a little something about why you were traveling!</p>
          </section>

          <div className="section" id="pa">
            <i className="mg map-us-pa"></i>
            <h2>Pennsylvania</h2>
          </div>

          <section id='location-one'>
            <h3>Location One</h3>
            <p>This place was pretty great.</p>
            <span className="date">Jan 1</span>

            <div className="grid">
              <div className="box box--2x2">
                <div className="image-wrapper" style={{backgroundImage: 'url(' + Image3x1 + ')'}}></div>
              </div>
              <div className="box box--1x1">
                <div className="image-wrapper" style={{backgroundImage: 'url(' + Image2x1 + ')'}}></div>
              </div>
              <div className="box box--1x1">
                <div className="image-wrapper" style={{backgroundImage: 'url(' + Image1x1 + ')'}}></div>
              </div>
            </div>
          </section>

          <section id='location-two'>
            <h3>Location Two</h3>
            <p>But this place was even better.</p>
            <span className="date">Jan 16</span>

            <div className="grid">
              <div className="box box--2x2">
                <div className="image-wrapper" style={{backgroundImage: 'url(' + Image3x1 + ')'}}></div>
              </div>
              <div className="box box--1x1">
                <div className="image-wrapper" style={{backgroundImage: 'url(' + Image2x1 + ')'}}></div>
              </div>
              <div className="box box--1x1">
                <div className="image-wrapper" style={{backgroundImage: 'url(' + Image1x1 + ')'}}></div>
              </div>
            </div>
          </section>


          <div className="section end">
            <h4 className="h2">The end</h4>
            <p>Travel Log designed by <a href="https:/laurenhallden.com" title="Lauren Hallden, Designer">Lauren Hallden</a>.</p>
            <p>Want to make one of these?<br />
              <a title="Travel Log GitHub Repo" href="https://github.com/laurenhallden/travellog">Grab the code</a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
