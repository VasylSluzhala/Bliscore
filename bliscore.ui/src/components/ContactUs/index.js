import React, { Component } from 'react';
import Mail from '../../images/mail.svg';
import Location from '../../images/location.svg';
import Phone from '../../images/phone.svg';

export default class ContactUs extends Component {
  render() {
    return (
      <section className="burger dark-template-light-bg shapebg-right" id="contact">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-sm-7 col-sm-offset-1  ">
              <div className="contact-form">
                <h2 className="text-center mb5 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">Send a message </h2>
                <form id="ajax-contact" method="post" action="contact-mail.php" className="wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".7s">
                  <div id="form-messages" className="notification contact"></div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input id="first_name" className="form-control" name="first_name" required="" type="text" /> 
                                 <label htmlFor="first_name">First Name :</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input id="last_name" className="form-control" name="last_name" required="" type="text" placeholder="" />
                                 <label htmlFor="last_name">Last Name :</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input id="email" className="form-control" name="email" required="" type="text" placeholder="" />
                           <label htmlFor="email">Email :</label>
                  </div>
                  <div className="form-group">
                    <textarea id="message" className="form-control" name="message" rows="5" required="" placeholder=""></textarea>
                    <label htmlFor="message">Message :</label>
                  </div>
                  <button type="submit" className="btn-white"> SUBMIT</button>
                </form>
              </div>
            </div>
            <div className="col-sm-4 col-sm-pull-1 wow fadeInUp" data-wow-delay=".9s" data-wow-duration=".9s">
              <div className="contact-info">
                <h3 className="text-center mb3 mt0">Contact us </h3>
                <div className="contact-item">
                  <img src={Phone} className="pull-left" width="55" />
                        <span>+1234 234235423 </span>
                </div>
                <div className="contact-item">
                <img src={Mail} className="pull-left" width="55" />
                        <span>info@bliscore.com</span>
                </div>
                <div className="contact-item">
                  <img src={Location} className="pull-left" width="55" />
                        <span>273 Zelena Lviv, Ukraine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}