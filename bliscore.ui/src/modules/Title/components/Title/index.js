import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Title extends Component {
  constructor() {
    super();
    }

  render() {
    return (
      <section className="" id="home">
        <div className="banner burger  align-item-center parallax">
          <Particles
            params={{ particles: { number: { value: 15, density: { enable: true, value_area: 1000 } }, color: { value: "#4e68f0" }, shape: { type: "circle", stroke: { "stroke.width": 0, "stroke.color": "#000000" }, polygon: { "polygon.nb_sides": 5 }, image: { "image.src": "img/github.svg", "image.width": 100, "image.height": 100 } }, opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } }, size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } }, line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }, move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: true }}
            style="width: 100% !important; height: 100% !important;"
            width={1600}
            height={800}
            className="particles-js">
          </Particles>
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

export { Title }