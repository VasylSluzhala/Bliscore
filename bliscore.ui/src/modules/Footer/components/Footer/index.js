import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer className="footer t-burger dark-template-bg">
        <div className="container">
          <div className="row footer-links">
            <div className="col-sm-3 col-lg-3 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s">
              <a href="javascript:void(0);" className="">
                <img src="images/logo-light.png" alt="" className="img-responsive mt2 footer-logo" /></a>
            </div>
            <div className="col-sm-3 col-sm-offset-6 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".7s">
              <h3>Social Media</h3>
              <ul className="social list-unstyled mt2">
                <li><a href="javascript:void(0);"><FontAwesomeIcon icon={["fab","twitter"]} size="1x" className="img-responsive"/></a></li>
                <li><a href="javascript:void(0);"><FontAwesomeIcon icon={["fab","instagram"]} size="1x" className="img-responsive"/></a></li>
                <li><a href="javascript:void(0);"><FontAwesomeIcon icon={["fab","facebook"]} size="1x" className="img-responsive"/></a></li>
              </ul>
            </div>
            <div className="text-center col-sm-12 mb1">
              <p className="copyright">All rights reserved &copy; 2018</p>
            </div>
          </div>
          <div className="row">
          </div>
        </div>
      </footer>
    );
  }
}

export { Footer }