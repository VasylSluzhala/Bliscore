import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AuthorItem } from '../AuthorItem';
import { getTestimonials } from '../../actions';

class Testimonials extends React.Component {

    constructor(props) {
        super(props);

        this.props.getTestimonials();
    }

    renderAuthors() {
        let counter = -1;
        return _.map(this.props.testimonials, function (person) {
            counter++;
            return <AuthorItem key={counter} Index={counter} Person={person}></AuthorItem>
        })
    }

    render() {
        return (
            <section class="burger dark-template-bg" id="reviews">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 reviews">
                            <h2 class=" text-center mb5 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">What our clients are saying !</h2>
                            <i class="hudge-quote fa fa-quote-left wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s"></i>
                            <div id="myCarousel" class=" carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators ">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    {this.renderAuthors()}
                                </div>
                            </div>
                            <i class="hudge-quote fa fa-quote-right wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s"></i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return { testimonials: state.testimonials };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getTestimonials }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials)