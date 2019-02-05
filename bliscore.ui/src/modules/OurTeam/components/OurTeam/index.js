import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getTeam } from '../../actions';
import { Item } from '../Item';

class OurTeam extends Component {
  constructor(props){
    super(props);
    this.props.getTeam();
  }

  renderTeam(){
    let counter = -1;
    return _.map(this.props.team, function(person){
      counter++;
      return <Item key={counter} Index={counter} Name={person.Name} Post={person.Post} Url={person.Url}></Item>
    })
  }

  render() {
    return (
      <section className="burger team dark-template-light-bg" id="team">
        <div className="container">
          <div className="row">
            <div class="col-lg-6 col-lg-offset-3  text-center mb5 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
              <h2>Our Team</h2>
              <p className="big-pera">People who <strong className="template-color">care.</strong></p>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {this.renderTeam()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getTeam}, dispatch);
}

function mapStateToProps(state){
  return { team: state.team }
}

export default connect(mapStateToProps, mapDispatchToProps)(OurTeam)