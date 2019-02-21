import React from 'react';
import _ from 'lodash';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//import { Carousel } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {components} from '../../../Portfolio';


//import { getTestimonials } from '../../actions';

class Testimonials extends React.Component {

    constructor(props) {
        super(props);

        //this.props.getTestimonials();
    }

    testimonials = [
        {
            FullName: "Nazar Khalavka",
            Post: "Financier",
            Text: "Bliscore are responsible and trustworthy. Though we had disagreements at first they did a great job. Working with them will always be a pleasure.",
            Url: require("./img/nazar.jpg")
        },
        {
            FullName: "Alexandr Iakovlev",
            Post: "Project Manager",
            Text: "Team work with passion and never misses an opportunity for a challenge. Thank you and keep up the good work!",
            Url: require("./img/alex.jpg")
        },
        {
            FullName: "Roman Yakovchuk",
            Post: "Partner Manager at 3YOURMIND",
            Text: "Bliscore has an inovative approach for every task. They successfully developed a progressive and сompetitive solution.",
            Url: require("./img/roman.jpg")
        }
    ];

    renderTiles() {
        return _.map(this.testimonials, (person, i) =>
                <div className="media">
                    <div className="media-left"><img src={person.Url} alt="author" /></div>
                    <div className="media-body media-middle">
                        <p>{person.Text}</p>
                        <div className="author-post"><strong>{person.Post}</strong></div>
                        <div className="author-name text-muted"><strong>- {person.FullName}</strong></div>
                    </div>
                </div>
        )
    }
  
     render() {
        var settings = {
            autoplay:true,
            autoplaySpeed:3000,
           dots: true,
           infinite: true,
           speed: 500,
           slidesToShow: 1,
           slidesToScroll: 1,
           prevArrow: <components.LeftArrow/>,
           nextArrow: <components.RightArrow/>,
        };

        return (
            <section className="burger dark-template-bg" id="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 reviews">
                            <h2 className=" text-center mb5 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">What our clients are saying!</h2>
                            <i className="hudge-quote fa fa-quote-left wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s"></i>

                  <div className="row align-item-end">
                     <Slider className="col-xs-8 col-xs-offset-2 wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".5s" {...settings}>
                        {this.renderTiles()}
                     </Slider>
                  </div>
                            <i className="hudge-quote fa fa-quote-right wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s"></i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

// function mapStateToProps(state) {
//     return { testimonials: state.testimonials };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getTestimonials }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Testimonials)
export default Testimonials