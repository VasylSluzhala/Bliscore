import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mail from './img/mail.svg';
import Location from './img/location.svg';
import Phone from './img/phone.svg';


class ContactUs extends Component {

  state={ 
    contact:{
      Name:'',
      LastName:'',
      Email:'',
      Message:''
    },
    defaultContact: {
      Name:'',
      LastName:'',
      Email:'',
      Message:''
    }
  }

  notifySuccess = () => toast("Message sent.");
  notifyValidationError = () => toast("Fill in all the fields, please.");

  send = () => {
    if(this.state.contact.Email == ''|| this.state.contact.Message == '' || this.state.contact.Name == '')
    {
      this.notifyValidationError()
      return;
    }
    var thisHolder = this;
    axios.post("http://bliscore-dev.eu-west-2.elasticbeanstalk.com/api/mail", this.state.contact)
    .then(function(a){
      thisHolder.setState({contact: {...thisHolder.state.defaultContact}});
      thisHolder.notifySuccess();
    })
    .catch(function (a){
    });
  }

  nameValidate = (elem) => {
    this.setState({
      contact:{ ...this.state.contact,
        Name: elem.target.value
      }
    })
  }

  lastNameValidate = (elem) => {
    this.setState({
      contact:{ ...this.state.contact,
        LastName: elem.target.value
      }
    })
  }

  emailValidate = (elem) => {
    this.setState({
      contact:{ ...this.state.contact,
        Email: elem.target.value
      }
    })
  }

  messageValidate = (elem) => {
    this.setState({
      contact:{ ...this.state.contact,
        Message: elem.target.value
      }
    })
  }

  render() {
    return (
      <section className="burger dark-template-light-bg shapebg-right" id="contact">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-sm-7 col-sm-offset-1  ">
              <div className="contact-form">
                <h2 className="text-center mb5 wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".6s">Send a message </h2>
                <div id="ajax-contact" className="wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".6s">
                  <div id="form-messages" className="notification contact"></div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input id="first_name" value={this.state.contact.Name} onChange={this.nameValidate} className="form-control" name="Name" required="" type="text" /> 
                                 <label htmlFor="first_name">First Name :</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input id="last_name" value={this.state.contact.LastName} onChange={this.lastNameValidate} className="form-control" name="last_name" required="" type="text" placeholder="" />
                                 <label htmlFor="last_name">Last Name :</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input id="email" value={this.state.contact.Email} onChange={this.emailValidate} className="form-control" name="Email" required="" type="text" placeholder="" />
                           <label htmlFor="email">Email :</label>
                  </div>
                  <div className="form-group">
                    <textarea id="message" value={this.state.contact.Message} onChange={this.messageValidate} className="form-control" name="Message" rows="5" required="" placeholder=""></textarea>
                    <label htmlFor="message">Message :</label>
                  </div>
                  <button className="btn-alpha" onClick={this.send.bind(this)}> SUBMIT</button>
                  <ToastContainer autoClose={3000}></ToastContainer>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-sm-pull-1 wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".5s">
              <div className="contact-info">
                <div className="contact-item">
                  <img src={Phone} className="pull-left" width="55" />
                  <span><a href="skype:info@bliscore.com">Skype: info@bliscore.com</a></span>
                </div> 
                <div className="contact-item">
                <img src={Mail} className="pull-left" width="55" />
                <span>
                  <a href="mailto:info@bliscore.com" target="_blank" rel="noopener">info@bliscore.com</a>
                </span>
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

export { ContactUs }