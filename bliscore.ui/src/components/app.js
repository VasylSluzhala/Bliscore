import React, { Component } from 'react';
import Header from './Header';
import ContactUs from './ContactUs';
import Main from './Main';
import OurTeam from './OurTeam';
import Footer from './Footer';
import Services from './Services';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Services></Services>
        <OurTeam></OurTeam>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    );
  }
}
