import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Services extends Component {
    render() {
        return (
            <section className="burger dark-template-bg services" id="service" >
            <div className="container">
               <div className="row">
               <div className="col-sm-12 col-lg-8 col-lg-offset-2 text-center">
                     <h2 className="wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".5s">Services</h2>
                     <div className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".5s">
                     <p className="big-pera">We do things <strong className="template-color">differently</strong> and provide key digital services.</p>
                     </div>
                  </div>
               </div>
               <div className="row align-item-center mt6">
                  <div className="col-lg-8 col-sm-12 col-lg-offset-2">
                     <div className="services-list">
                        <div className="service-box wow fadeInUp" data-wow-delay=".05s" data-wow-duration=".3s">
                           <FontAwesomeIcon icon="code" size="2x" className="img-responsive"/>
                           <span>Web Development</span>
                        </div>
                        <div className="service-box wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".35s">
                           <FontAwesomeIcon icon="laptop" size="2x" className="img-responsive"/>
                           <span>UI/UX Design</span>
                        </div>
                        <div className="service-box wow fadeInUp" data-wow-delay=".15s" data-wow-duration=".4s">
                           <FontAwesomeIcon icon="users" size="2x" className="img-responsive"/>
                           <span>Dedicated Team</span>
                        </div>
                        <div className="service-box wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".45s">
                           <FontAwesomeIcon icon="rocket" size="2x" className="img-responsive"/>
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

export { Services }