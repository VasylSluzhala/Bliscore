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
         Id: 1,
         Name: "Call Management Solution",
         Url: require("../ProjectList/img/CallManagementSolution/Home-min.png"),
         AllUrl: [
            require("../ProjectList/img/CallManagementSolution/Home-min.png"),
            require("../ProjectList/img/CallManagementSolution/CallDetails-min.png"),
            require("../ProjectList/img/CallManagementSolution/CallListing-min.png"),
            require("../ProjectList/img/CallManagementSolution/HeartBeats-min.png"),
            require("../ProjectList/img/CallManagementSolution/QC-min.png"),
            require("../ProjectList/img/CallManagementSolution/Reports-min.png"),
            require("../ProjectList/img/CallManagementSolution/Settings-min.png"),
            require("../ProjectList/img/CallManagementSolution/Localization-min.png")
         ],
         Title: "The application provides cloud-based, compliant and secure call recording solution.",
         Description: "It's a cloud based, compliant and secure call recording solution. Whether calls need to be recorded for staff training, dispute resolution, compliance or security reasons. Service provides complete flexibility, scalability and unlimited storage of calls and other sensitive data without additional hardware or installation services. All calls are stored in a 256-bit encrypted format, with the original file preserved in its original state with a rotating encryption methodology that is unique and specific to each individual call. This makes all recordings 100% compliant with regulatory legislation. All calls are stored in cloud servers and are not only backed up, but have a redundant option across multiple servers and geographical locations. Application supports multiple time zones, multiple recording locations and the ability to search, sort and locate calls within seconds.",
         Technologies: []
      },
      {
         Id: 2,
         Name: "Call Center",
         Url: require("../ProjectList/img/CallCenter/AgentCallActive-min.png"),
         AllUrl: [
            require("../ProjectList/img/CallCenter/AgentCallActive-min.png"),
            require("../ProjectList/img/CallCenter/AgentCallEnded-min.png"),
            require("../ProjectList/img/CallCenter/Registration2-min.png"),
            require("../ProjectList/img/CallCenter/Registration3-min.png"),
            require("../ProjectList/img/CallCenter/Queues-min.png")
         ],
         Title: "Provides flexible way of configuration and ordering call center agents for your business.",
         Description: "Call Center is made for accepting calls for customers, which don't have a lot of time to deal with them. The service gives you the ability to hire agents that will answer the calls for you, save detailed info about company for them. Service includes sending sms and emails, creating and accepting calls, redirecting calls, conferences, live trasfer and other. The wide administrative tools, including listen in, queues managing, priority state machine, call reports and records is provided too.",
         Technologies: []
      },
      {
         Id: 3,
         Name: "Recording Service",
         Url: require("../ProjectList/img/RecordingAndSendingService/WeeklyReview-min.png"),
         AllUrl: [
            require("../ProjectList/img/RecordingAndSendingService/WeeklyReview-min.png"),
            require("../ProjectList/img/RecordingAndSendingService/WeeklyReview-min.png"),
            require("../ProjectList/img/RecordingAndSendingService/EvaluatedEmail-min.png")
         ],
         Title: "The application provides cloud-based, compliant and secure call recording solution.",
         Description: "Recording Services is made for managing different audio formats and storage settings of audio files. Despite of different manipulations with audio it provides secure and fast support for side projects. Service includes counting detailed statistics of calls and sending custom emails to customers periodically.",
         Technologies: []
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
         slidesToScroll: 1,
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                initialSlide: 2
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
         <section id="portfolio">
            <div className="burger dark-template-bg buy-token shapebg-right">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-lg-offset-3  text-center mb5 wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".5s">
                        <h2>Projects</h2>
                        <p className="big-pera">Our <strong className="template-color">success</strong> story.</p>
                     </div>
                  </div>
                  <div className="row align-item-end">
                     <Slider className="col-xs-12 wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".5s" {...settings}>
                        {this.renderTiles()}
                     </Slider>
                  </div>
               </div>
            </div>

            <Route path="/project/:Id" render={(props)=><Project projects={this.projects} {...props}/>}></Route>

         </section>
      );
   }
}

export default ProjectList;