import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Nav,NavItem,Navbar,MenuItem,NavDropdown } from 'react-bootstrap';

import Logo from './img/bliscore.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }

  isTop = true;

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // if(window.scrollY > 0){
    //   if(this.isTop){
    //    this.nav.setAttribute("class", "navbar wow fadeInDown sticky-header");
    //   this.isTop = false;
    // }
    // } else {
    //   this.nav.setAttribute("class", "navbar wow fadeInDown");
    //   this.isTop = true;
    // }
  }

   render() {
     return (  
       <Navbar bsStyle="none" className="navbar wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1s" ref={this.nav} style={{background:"#1b1b1d"}}>
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
// render() {
//     return(

//     <nav className="navbar wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1s" id="navbar" ref="navbar">
//          <div className="container">
//             <div className="navbar-header ">
//                <button data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
//                   <span className="sr-only">Toggle navigation</span>
//                   <span className="icon-bar top"></span>
//                   <span className="icon-bar mid"></span>
//                   <span className="icon-bar btm"></span>
//                </button>
//                <a href="#hero" className="site-logo navbar-brand"><img src={Logo} alt="" width="150" className="img-responsive"/></a>
//             </div>
//             <div id="navbarCollapse" className="collapse navbar-collapse">
//                <ul className="nav navbar-nav navbar-right " id="nav_bar">
//                   <li><AnchorLink href="#home">Home</AnchorLink></li>
//                   <li><AnchorLink href="#service">Services</AnchorLink></li>
//                   <li><AnchorLink href="#portfolio">Projects</AnchorLink></li>
//                   <li><AnchorLink href="#testimonials">Testimonials</AnchorLink></li>
//                   <li><AnchorLink href="#team">Team</AnchorLink></li>
//                   <li><AnchorLink href="#contact">Contact</AnchorLink></li>
//                </ul>
//             </div>
//          </div>
//       </nav>
//     );
    }
 }

export { Header, Logo }