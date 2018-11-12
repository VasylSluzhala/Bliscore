import React, { Component } from 'react';

import Logo from '../../images/Logo200-min.png';

export default class Header extends Component {
  render() {
    return (
     <nav className="navbar wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1s" id="myNavbar">
        <div className="container">
           <div className="navbar-header ">
              <button data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar top"></span>
                 <span className="icon-bar mid"></span>
                 <span className="icon-bar btm"></span>
              </button>
              <a href="#hero" className="site-logo navbar-brand"><img src={Logo} alt="" className="img-responsive"/></a>
           </div>
           <div id="navbarCollapse" className="collapse navbar-collapse ">
              <ul className="nav navbar-nav navbar-right " id="nav_bar">
                 <li><a href="#about">About Cryptency</a></li>
                 <li><a href="#buy-token">Token</a></li>
                 <li><a href="#service">Services</a></li>
                 <li><a href="#roadmap">roadmap</a></li>
                 <li><a href="#faq-section">Faq</a></li>
                 <li><a href="#contact">Contact</a></li>
                 <li className="sidebar-btn"><a href="#white-paper" className="menu-btn">White Paper</a></li>
              </ul>
           </div>
        </div>
     </nav>
    );
  }
}