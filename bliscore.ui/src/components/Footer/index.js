import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer t-burger dark-template-bg">
        <div class="container">
          <div class="row footer-links">
            <div class="col-sm-3 col-lg-3 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s">
              <a href="javascript:void(0);" class="">
                <img src="images/logo-light.png" alt="" class="img-responsive mt2 footer-logo" /></a>
            </div>
            <div class="col-sm-3 col-sm-offset-6 wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".7s">
              <h3>Social Media</h3>
              <ul class="social list-unstyled mt2">
                <li><a href="javascript:void(0);"><i class="fab fa-twitter"></i></a></li>
                <li><a href="javascript:void(0);"><i class="fab fa-dribbble"></i></a></li>
                <li><a href="javascript:void(0);"><i class="fab fa-instagram"></i></a></li>
                <li><a href="javascript:void(0);"><i class="fab fa-behance"></i></a></li>
              </ul>
            </div>
            <div class="text-center col-sm-12 mb1 wow fadeInUp" data-wow-delay=".8s" data-wow-duration=".5s" >
              <p class="copyright">All rights reserved &copy; 2018</p>
            </div>
          </div>
          <div class="row">
          </div>
        </div>
      </footer>
    );
  }
}