import React, { Component } from 'react';
import Header from './Header';
import ContactUs from './ContactUs';
import Main from './Main';
import OurTeam from './OurTeam';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <Header></Header>
        <Main></Main>
        <OurTeam></OurTeam>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    );
  }
}
