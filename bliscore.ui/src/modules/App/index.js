import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import Header from './Header';
import ContactUs from './ContactUs';
import Main from './Main';
import OurTeam from './OurTeam';
import Footer from './Footer';
import Services from './Services';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
          <Header></Header>
          <Main></Main>
          <Services></Services>
          <OurTeam></OurTeam>
          <ContactUs></ContactUs>
          <Footer></Footer>
        </div>
      </Provider>
    );
  }
}