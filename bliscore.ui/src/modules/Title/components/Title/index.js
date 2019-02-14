import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import earthVideo from './video/Rotation of The Planet Earth min.mp4';
import dotnetImg from './img/dotnet.svg';

class Title extends Component {
  constructor() {
    super();
    }

  render() {
    return (
      <section className="title-section" id="home">
        <div className="banner burger  align-item-center parallax" style={{backgroundColor: 'black'}}>
          <ReactPlayer url={earthVideo}
          className="react-player"
          width="100%"
          height="100%"
          playing
          loop
          muted
          config={{ file: { attributes: {
            autoPlay: true,
            muted: true
          }}}}
          ></ReactPlayer>
          <div className="container">
            <div className="row align-item-center mt6 text-center">
              <div className="col-sm-12">
                <div className="banner-text">
                  <h1 className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">Enterprise web developm
                  {/* <strong className="template-color">.Net</strong> */}
                  <img src={dotnetImg} className='dotnet-img'></img></h1>
                  <div className="wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                    <p className="big-pera">Clean great flex-made.</p>
                  </div>
                  <div className="mt3 banner-btn-group wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                    <AnchorLink href="#portfolio" className="redirect-btn btn-alpha">PORTFOLIO</AnchorLink>
                    <AnchorLink href="#contact" className="redirect-btn btn-alpha">CONTACT US</AnchorLink>
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