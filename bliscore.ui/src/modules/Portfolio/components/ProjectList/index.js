import React from 'react';

import { Route, Link } from 'react-router-dom';

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
                     <Link to="/project">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                           <div class="timer-box text-center wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">
                              <h2 class="mt0">ICO ENDS IN </h2>
                              <div class="timer">
                                 <div class="days"></div>
                                 <div class="hours"></div>
                                 <div class="minutes"></div>
                                 <div class="seconds"></div>
                              </div>
                              <a href="javascript:void(0);" class=" btn-alpha wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">Join & Buy Now </a>
                           </div>
                        </div>
                     </Link>
                     <Link to="/project">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                           <div class="timer-box text-center wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">
                              <h2 class="mt0">ICO ENDS IN </h2>
                              <div class="timer">
                                 <div class="days"></div>
                                 <div class="hours"></div>
                                 <div class="minutes"></div>
                                 <div class="seconds"></div>
                              </div>
                              <a href="javascript:void(0);" class=" btn-alpha wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">Join & Buy Now </a>
                           </div>
                        </div>
                     </Link>
                     <Link to="/project">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                           <div class="timer-box text-center wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">
                              <h2 class="mt0">ICO ENDS IN </h2>
                              <div class="timer">
                                 <div class="days"></div>
                                 <div class="hours"></div>
                                 <div class="minutes"></div>
                                 <div class="seconds"></div>
                              </div>
                              <a href="javascript:void(0);" class=" btn-alpha wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">Join & Buy Now </a>
                           </div>
                        </div>
                     </Link>
                  </div>
               </div>
            </div>

            <Route path="/project" component={Project}></Route>
            
         </section>
      );
   }
}

export default ProjectList;