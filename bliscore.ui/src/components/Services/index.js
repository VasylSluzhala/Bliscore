import React, { Component } from 'react';

export default class Services extends Component {
    render() {
        return (
            <section className="burger dark-template-bg services" id="service" >
            <div className="container">
               <div className="row">
               <div className="col-sm-12 col-lg-8 col-lg-offset-2 text-center">
                     <h2 className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">Services</h2>
                     <div className="wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">
                     <p className="big-pera">We do things differently and provide key digital services.</p>
                     </div>
                  </div>
               </div>
               <div className="row align-item-center mt6">
                  <div className="col-lg-8 col-sm-12 col-lg-offset-2">
                     <div className="services-list">
                        <div className="service-box wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".3s">
                           <img src="images/investment.svg" className="img-responsive" alt="cryptency"/>
                           <span>Web Development</span>
                        </div>
                        <div className="service-box wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s">
                           <img src="images/digital-cash.svg" className="img-responsive" alt="cryptency"/>
                           <span>UI/UX Design</span>
                        </div>
                        <div className="service-box wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">
                           <img src="images/fast-transaction.svg" className="img-responsive" alt="cryptency"/>
                           <span>Dedicated Team</span>
                        </div>
                        <div className="service-box wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">
                           <img src="images/bitcoin-shopping.svg" className="img-responsive" alt="cryptency"/>
                           <span>QA</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        );
    }
}