import React, { Component } from 'react';
import Mail from '../../images/mail.svg';
import Location from '../../images/location.svg';
import Phone from '../../images/phone.svg';

export default class ContactUs extends Component {
  render() {
    return (
      <section class="burger dark-template-light-bg shapebg-right" id="contact">
        <div class="container">
          <div class="row align-item-center">
            <div class="col-sm-7 col-sm-offset-1  ">
              <div class="contact-form">
                <h2 class="text-center mb5 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">Send a message </h2>
                <form id="ajax-contact" method="post" action="contact-mail.php" class="wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".7s">
                  <div id="form-messages" class="notification contact"></div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input id="first_name" class="form-control" name="first_name" required="" type="text" /> 
                                 <label for="first_name">First Name :</label>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input id="last_name" class="form-control" name="last_name" required="" type="text" placeholder="" />
                                 <label for="last_name">Last Name :</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input id="email" class="form-control" name="email" required="" type="text" placeholder="" />
                           <label for="email">Email :</label>
                  </div>
                  <div class="form-group">
                    <textarea id="message" class="form-control" name="message" rows="5" required="" placeholder=""></textarea>
                    <label for="message">Message :</label>
                  </div>
                  <button type="submit" class="btn-white"> SUBMIT</button>
                </form>
              </div>
            </div>
            <div class="col-sm-4 col-sm-pull-1 wow fadeInUp" data-wow-delay=".9s" data-wow-duration=".9s">
              <div class="contact-info">
                <h3 class="text-center mb3 mt0">Contact us </h3>
                <div class="contact-item">
                  <img src={Phone} class="pull-left" width="55" />
                        <span>+1234 234235423 </span>
                </div>
                <div class="contact-item">
                <img src={Mail} class="pull-left" width="55" />
                        <span>info@bliscore.com</span>
                </div>
                <div class="contact-item">
                  <img src={Location} class="pull-left" width="55" />
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