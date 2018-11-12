import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <section className="" id="hero">
        <div className="banner burger  align-item-center parallax">
          <div id="particles-js"></div>
          <div className="container">
            <div className="row align-item-center mt6 text-center">
              <div className="col-sm-12 col-lg-8 col-lg-offset-2">
                <div className="banner-text">
                  <h1 className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">We <strong className="template-color">lead</strong> our customers to success</h1>
                  <div className="wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                    <p className="big-pera">Developing great bussiness solutions on web</p>
                  </div>
                  <div className="mt3 banner-btn-group wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                    <a href="#white-paper" className="redirect-btn btn-alpha"> LEARN MORE </a>
                    <a href="#white-paper" className="redirect-btn btn-alpha"> OUR WORKS </a>
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