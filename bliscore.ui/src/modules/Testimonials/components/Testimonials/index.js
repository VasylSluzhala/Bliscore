import React from 'react';
import _ from 'lodash';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Carousel } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    render() {
        return (
            <section className="burger dark-template-bg" id="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 reviews">
                            <h2 className=" text-center mb5 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">What our clients are saying!</h2>
                            <i className="hudge-quote fa fa-quote-left wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s"></i>

                            <Carousel>
                                {_.map(this.testimonials, (person, i) =>
                                    <Carousel.Item key={i}>
                                            <div className="media">
                                                <div className="media-left"><img src={person.Url} alt="author" /></div>
                                                <div className="media-body media-middle">
                                                    <p>{person.Text}</p>
                                                    <div className="author-post"><strong>{person.Post}</strong></div>
                                                    <div className="author-name text-muted"><strong>- {person.FullName}</strong></div>
                                                </div>
                                            </div>
                                    </Carousel.Item>
                                )}
                            </Carousel>
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