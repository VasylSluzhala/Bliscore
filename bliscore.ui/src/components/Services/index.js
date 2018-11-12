import React, { Component } from 'react';

export default class Services extends Component {
    render() {
        return (
            <section class="burger dark-template-bg services" id="service" >
            <div class="container">
               <div class="row">
               <div class="col-sm-12 col-lg-8 col-lg-offset-2 text-center">
                     <h2 class="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">Services</h2>
                     <div class="wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">
                     <p class="big-pera">We do things differently and provide key digital services.</p>
                     </div>
                  </div>
               </div>
               <div class="row align-item-center mt6">
                  <div class="col-lg-8 col-sm-12 col-lg-offset-2">
                     <div class="services-list">
                        <div class="service-box wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".3s">
                           <img src="images/investment.svg" class="img-responsive" alt="cryptency"/>
                           <span>Web Development</span>
                        </div>
                        <div class="service-box wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s">
                           <img src="images/digital-cash.svg" class="img-responsive" alt="cryptency"/>
                           <span>UI/UX Design</span>
                        </div>
                        <div class="service-box wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">
                           <img src="images/fast-transaction.svg" class="img-responsive" alt="cryptency"/>
                           <span>Dedicated Team</span>
                        </div>
                        <div class="service-box wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">
                           <img src="images/bitcoin-shopping.svg" class="img-responsive" alt="cryptency"/>
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