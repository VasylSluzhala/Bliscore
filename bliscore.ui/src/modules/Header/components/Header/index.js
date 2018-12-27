import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Nav,Navbar } from 'react-bootstrap';

import Logo from './img/bliscore.png';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  isTop = true;

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if(window.scrollY > 0){
      if(this.isTop){
      this.isTop = false;
      this.forceUpdate();
    }
    } else {
      this.isTop = true;
      this.forceUpdate();
    }
  }

   render() {

     return (  
       <Navbar bsStyle="none" className={"wow fadeInDown " + (this.isTop?"":"sticky-header") } data-wow-delay=".2s" data-wow-duration="1s" style={{background:"#1b1b1d"}}>
           <Navbar.Header>
             <Navbar.Brand>
               <a href="#hero" className="site-logo navbar-brand"><img src={Logo} alt="" width="150" className="img-responsive" /></a>
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
             <Nav pullRight>
               <li><AnchorLink href="#home">Home</AnchorLink></li>
               <li><AnchorLink href="#service">Services</AnchorLink></li>
               <li><AnchorLink href="#portfolio">Projects</AnchorLink></li>
               <li><AnchorLink href="#testimonials">Testimonials</AnchorLink></li>
               <li><AnchorLink href="#team">Team</AnchorLink></li>
               <li><AnchorLink href="#contact">Contact</AnchorLink></li>
             </Nav>
           </Navbar.Collapse>
       </Navbar> 


     );
    }
 }

export { Header, Logo }