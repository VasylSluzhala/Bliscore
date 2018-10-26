import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <section class="" id="hero">
        <div class="banner burger  align-item-center parallax">
          <div id="particles-js"></div>
          <div class="container">
            <div class="row align-item-center mt6 text-center">
              <div class="col-sm-12 col-lg-8 col-lg-offset-2">
                <div class="banner-text">
                  <h1 class="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">We <strong class="template-color">lead</strong> our customers to success</h1>
                  <div class="wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                    <p class="big-pera">Developing great bussiness solutions on web</p>
                  </div>
                  <div class="mt3 banner-btn-group wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                    <a href="#white-paper" class="redirect-btn btn-alpha"> LEARN MORE </a>
                    <a href="#white-paper" class="redirect-btn btn-alpha"> OUR WORKS </a>
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