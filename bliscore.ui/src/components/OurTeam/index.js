import React, { Component } from 'react';

export default class OurTeam extends Component {
  render() {
    return (
      <section className="burger team dark-template-light-bg" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="wow fadeInUp mb5" data-wow-delay=".2s" data-wow-duration="1s">Meet Our Team</h2>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-6 wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".4s">
                  <div className="our-team">
                    <img src="images/team-1.jpg" alt="team image" />
                      <div className="team-content">
                      <h3 className="title">Kim</h3>
                      <span className="post">Founder</span>
                      <ul className="icon">
                        <li><a href="javascript:void(0);"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="javascript:void(0);"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="javascript:void(0);"><i className="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}