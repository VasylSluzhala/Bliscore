import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
import _ from 'lodash';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// import { getTeam } from '../../actions';
import { Item } from '../Item';

class OurTeam extends Component {
  constructor(props){
    super(props);
    //this.props.getTeam();
  }

  team = [
    {
      Name: "Vasyl",
      Url: require("./img/Vasyl-min.jpg"),
      Post: "CEO"
    },
    {
      Name: "Rostyslav",
      Url: require("./img/Ros-min.jpg"),
      Post: "CTO"
    },
    {
      Name: "Andriy",
      Url: require("./img/Andrew-min.png"),
      Post: "CFO"
    }
  ];

  renderTeam(){
    let counter = -1;
    return _.map(this.team, function(person){
      counter++;
      return <Item key={counter} Index={counter} Name={person.Name} Post={person.Post} Url={person.Url}></Item>
    })
  }

  render() {
    return (
      <section className="burger team dark-template-light-bg" id="team">
        <div className="container">
          <div className="row">
            <div class="col-lg-6 col-lg-offset-3  text-center mb5 wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".5s">
              <h2>Our Team</h2>
              <p className="big-pera">People who <strong className="template-color">care.</strong></p>
            </div>
            <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2">
              <div className="row">
                {this.renderTeam()}
              </div>
            </div>
            <div class="col-lg-6 col-lg-offset-3  text-center wow fadeInUp">
              <h2 className="joinus">15+ talented people are working here</h2>
              <AnchorLink href="#contact" className="redirect-btn btn-alpha">JOIN US</AnchorLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({getTeam}, dispatch);
// }

// function mapStateToProps(state){
//   return { team: state.team }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(OurTeam)

export default OurTeam