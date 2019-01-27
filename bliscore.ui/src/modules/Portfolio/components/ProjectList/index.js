import _ from 'lodash';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Project from '../Project';
import ProjectListItem from '../ProjectListItem';

class ProjectList extends React.Component {

   projects = [
      {
         Name: "Call Management Solution",
         Url: require("../ProjectList/img/CallManagementSolution/Home-min.png")
      },
      {
         Name: "Call Center",
         Url: require("../ProjectList/img/CallCenter/AgentCallActive-min.png")
      },
      {
         Name: "Recording Service",
         Url: require("../ProjectList/img/RecordingAndSendingService/WeeklyReview-min.png")
      }
   ];

   renderTiles() {
      return _.map(this.projects, function (project) {
         return <ProjectListItem {...project}></ProjectListItem>
      })
   }

   render() {
      var settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1
      };
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
                     <Slider className="col-xs-12 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s" {...settings}>
                        {this.renderTiles()}
                     </Slider>
                  </div>
               </div>
            </div>

            <Route path="/project" component={Project}></Route>

         </section>
      );
   }
}

export default ProjectList;