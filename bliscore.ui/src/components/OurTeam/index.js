import React, { Component } from 'react';

export default class OurTeam extends Component {
  render() {
    return (
      <section class="burger team dark-template-light-bg" id="team">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <h2 class="wow fadeInUp mb5" data-wow-delay=".2s" data-wow-duration="1s">Meet Our Team</h2>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-md-3 col-sm-4 col-xs-6 wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".4s">
                  <div class="our-team">
                    <img src="images/team-1.jpg" alt="team image" />
                      <div class="team-content">
                      <h3 class="title">Kim</h3>
                      <span class="post">Founder</span>
                      <ul class="icon">
                        <li><a href="javascript:void(0);"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="javascript:void(0);"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="javascript:void(0);"><i class="fab fa-linkedin-in"></i></a></li>
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