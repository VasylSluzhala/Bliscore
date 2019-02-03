import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Particles from 'react-particles-js';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import earthVideo from './video/Rotation of The Planet Earth Slow.mp4';

class Title extends Component {
  constructor() {
    super();
    }

  render() {
    return (
      <section className="" id="home">
        <div className="banner burger  align-item-center parallax">
          <ReactPlayer url={earthVideo}
          className="react-player"
          width="100%"
          height="100%"
          loop
          playing
          ></ReactPlayer>
          <div className="container">
            <div className="row align-item-center mt6 text-center">
              <div className="col-sm-12 col-lg-8 col-lg-offset-2">
                <div className="banner-text">
                  <h1 className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">Enterprise web development.<strong className="template-color">Net</strong></h1>
                  <div className="wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                    <p className="big-pera">Clean great flex-made.</p>
                  </div>
                  <div className="mt3 banner-btn-group wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                    <AnchorLink href="#portfolio" className="redirect-btn btn-alpha">OUR WORKS</AnchorLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { Title }