import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

import Project from '../Project';

class ProjectList extends React.Component {
   render() {
      return (
         <section id="portfolio">
            <div class="burger dark-template-bg buy-token shapebg-right">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-6 col-lg-offset-3  text-center mb5 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                        <h2>Projects</h2>
                     </div>
                  </div>
                  <div class="row align-item-end">
                     <Carousel className="col-xs-12 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s" activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
                        <Carousel.Item key="0">
                           <Link to="/project" class="col-md-4 col-sm-6 col-xs-12">
                              <div className="timer-box text-center">
                                 <h2 className="mt0">ICO ENDS IN </h2>
                                 <div className="timer">
                                    <div className="days"></div>
                                    <div className="hours"></div>
                                    <div className="minutes"></div>
                                    <div className="seconds"></div>
                                 </div>
                                 <a href="javascript:void(0);" class=" btn-alpha wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">Join & Buy Now </a>
                              </div>
                           </Link>
                        </Carousel.Item>
                        <Carousel.Item key="1">
                           <Link to="/project" class="col-md-4 col-sm-6 col-xs-12">
                              <div className="timer-box text-center">
                                 <h2 className="mt0">ICO ENDS IN </h2>
                                 <div className="timer">
                                    <div className="days"></div>
                                    <div className="hours"></div>
                                    <div className="minutes"></div>
                                    <div className="seconds"></div>
                                 </div>
                                 <a href="javascript:void(0);" class=" btn-alpha wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">Join & Buy Now </a>
                              </div>
                           </Link>
                        </Carousel.Item>
                        <Carousel.Item key="2">
                           <Link to="/project" class="col-md-4 col-sm-6 col-xs-12">
                              <div className="timer-box text-center">
                                 <h2 className="mt0">ICO ENDS IN </h2>
                                 <div className="timer">
                                    <div className="days"></div>
                                    <div className="hours"></div>
                                    <div className="minutes"></div>
                                    <div className="seconds"></div>
                                 </div>
                                 <a href="javascript:void(0);" class=" btn-alpha wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">Join & Buy Now </a>
                              </div>
                           </Link>
                        </Carousel.Item>
                     </Carousel>
                  </div>
               </div>
            </div>

            <Route path="/project" component={Project}></Route>

         </section>
      );
   }
}

export default ProjectList;