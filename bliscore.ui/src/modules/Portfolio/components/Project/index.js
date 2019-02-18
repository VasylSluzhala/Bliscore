import React from 'react';
import _ from 'lodash';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
            autoplaySpeed: 7000
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
                        <div className="row align-item-center">
                            <Slider {...settings} ref={slider => (this.slider = slider)} className="col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-1 wow fadeIn" data-wow-delay=".5s" data-wow-duration="1s">
                                {this.renderImages()}
                            </Slider>

                            <div className="col-sm-10 col-sm-offset-1 col-md-5">
                                <h3 className="mb3 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">Description</h3>
                                <p className="project-description">{this.project.Description}</p>
                                {/* <ul className="list-group">
                            <li className="list-group-item wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".2s">Exchnage Rate <span className="badge">1 CTY = 0.002 BTC, 1 CTY = 0.002 ETH</span></li>
                            <li className="list-group-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".3s">Start Date <span className="badge">12 January 2018</span></li>
                            <li className="list-group-item wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s">End Date <span className="badge">21 September 2018</span></li>
                            <li className="list-group-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">Minimum Purchase <span className="badge">0.1BTC, 0.1ETH</span></li>
                            <li className="list-group-item wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">Hard Cap <span className="badge">62,500 CTY</span></li>
                            <li className="list-group-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".7s">Acceptable currencies <span className="badge">BTC, ETH</span></li>
                            </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project