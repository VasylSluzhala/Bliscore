import React from 'react';
import _ from 'lodash';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from './LeftArrow';
import RightArrow from './RighArrow';


class Project extends React.Component {

    constructor() {
        super();
        this.project = null;
    }

    getProject(Id) {
        const project = _.find(this.props.projects, function (elem) {
            return elem.Id == Id;
        });
        if (!project) project = this.props.projects[Id];
        return project;
    }

    renderImages() {
        return _.map(this.project.AllUrl, function (url) {
            return <img src={url} alt="distribution" className="cryptency-graph img-responsive" />
        })
    }

    render() {
        const Id = this.props.match.params.Id;
        this.project = this.getProject(Id);
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 7000,
            nextArrow: <RightArrow/>,
            prevArrow: <LeftArrow/>
        };
        return (
            <section id="project">
                <div className="burger dark-template-light-bg" id="token-distribution">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-lg-offset-3 text-center mb5 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                                <h2>{this.project.Name}</h2>
                                <p className="big-pera">{this.project.Title}</p>
                            </div>
                        </div>
                        <div className="row align-item-center" >
                            <Slider {...settings} ref={slider => (this.slider = slider)} className="col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-1 wow fadeIn" data-wow-delay=".5s" data-wow-duration="1s">
                                {this.renderImages()}
                            </Slider>

                            <div className="col-sm-10 col-sm-offset-1 col-md-5">
                                <h3 className="mb3 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">Description</h3>
                                <p className="project-description">{this.project.Description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project
export {Project,LeftArrow,RightArrow}