import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router } from 'react-router-dom';
//import thunk from 'redux-thunk'
import firebase from 'firebase';

import Header from '../Header';
import ContactUs from '../ContactUs';
import Title from '../Title';
import OurTeam from '../OurTeam';
import Footer from '../Footer';
import Services from '../Services';
import About from '../About';
import Testimonials from '../Testimonials';
import reducers from './reducers';

const firebaseConfig = {
  apiKey: "AIzaSyBHYMm4kI1VCf8MWcVVmeGQvCgkyPaujfg",
  authDomain: "bliscore-50af0.firebaseapp.com",
  databaseURL: "https://bliscore-50af0.firebaseio.com",
  projectId: "bliscore-50af0",
  storageBucket: "bliscore-50af0.appspot.com",
  messagingSenderId: "1018595030217"
}

firebase.initializeApp(firebaseConfig);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class App extends Component {

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <div>
            <Header></Header>
            <Title></Title>
            <Services></Services>
            <OurTeam></OurTeam>
            <About></About>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
          </div>
        </Router>
      </Provider>
    );
  }
}