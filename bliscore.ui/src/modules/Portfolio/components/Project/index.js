import React from 'react';


class Project extends React.Component {
    render() {
        return (
            <div class="burger dark-template-light-bg" id="token-distribution">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-6 col-lg-offset-3 text-center mb5 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                        <h2>Token Allocation</h2>
                        <p class="big-pera">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                     </div>
                  </div>
                  <div class="row align-item-center">
                     <div class="col-sm-5 wow fadeIn" data-wow-delay=".5s" data-wow-duration="1s">
                        <img src="images/distribution.png" alt="distribution" class="cryptency-graph img-responsive" />
                     </div>
                     <div class="col-sm-6 col-sm-offset-1">
                        <h3 class="mb3 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">Pre-Sale & Values</h3>
                        <ul class="list-group">
                           <li class="list-group-item wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".2s">Exchnage Rate <span class="badge">1 CTY = 0.002 BTC, 1 CTY = 0.002 ETH</span></li>
                           <li class="list-group-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".3s">Start Date <span class="badge">12 January 2018</span></li>
                           <li class="list-group-item wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s">End Date <span class="badge">21 September 2018</span></li>
                           <li class="list-group-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">Minimum Purchase <span class="badge">0.1BTC, 0.1ETH</span></li>
                           <li class="list-group-item wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">Hard Cap <span class="badge">62,500 CTY</span></li>
                           <li class="list-group-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".7s">Acceptable currencies <span class="badge">BTC, ETH</span></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
        );
    }
}

export default Project