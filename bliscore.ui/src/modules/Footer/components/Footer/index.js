import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer className="footer t-burger dark-template-bg">
        <div className="container">
          <div className="row footer-links">
            <div className="col-sm-3 col-sm-offset-6 wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".4s" id="socialMedia">
              <h3>Social Media</h3>
              <ul className="social list-unstyled mt2">
                <li><a href="https://www.linkedin.com/company/bliscore"><FontAwesomeIcon icon={["fab","linkedin"]} size="1x" className="img-responsive"/></a></li>
                <li><a href="https://www.instagram.com/bliscoreinfo"><FontAwesomeIcon icon={["fab","instagram"]} size="1x" className="img-responsive"/></a></li>
                <li><a href="https://www.facebook.com/Bliscore"><FontAwesomeIcon icon={["fab","facebook"]} size="1x" className="img-responsive"/></a></li>
                <li><a href="https://github.com/Bliscore"><FontAwesomeIcon icon={["fab","github"]} size="1x" className="img-responsive"/></a></li>
              </ul>
            </div>
            <div className="text-center col-sm-12 mb1">
              <p className="copyright">All rights reserved &copy; 2019</p>
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