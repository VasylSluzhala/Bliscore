import React from 'react';

class About extends React.Component {
    render() {
        return (
            <section id="about">
                <div className="burger about-special">
                    <div className="container">
                        <div className="row align-item-center">
                            <div className="col-sm-12 col-lg-7">
                                <div className="dark-template-bg">
                                    <div className="benifit-contant">
                                        <h2 className="mt0 wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">What's special  about cryptency</h2>
                                        <div className="wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                            <p className="big-pera" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                                        </div>
                                        <a href="#contact" className="redirect-btn mt2 btn-white wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s">BUY NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-5 ">
                                <div className="benifit-box">
                                    <div className="row">
                                        <div className="media-item col-sm-6 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".4s">
                                            <div className="media mb3">
                                                <img src="images/accepted-worldwide.svg" alt="secure" className="pull-left" width="50" />
                                                <div className="media-body">
                                                    <h3>Accepted Worldwide</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 media-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">
                                            <div className="media mb3">
                                                <img src="images/decentralised-currency.svg" alt="secure" className="pull-left" width="50" />
                                                <div className="media-body">
                                                    <h3>Decentralised Currency</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 media-item wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">
                                            <div className="media ">
                                                <img src="images/safe-and-secure.svg" alt="secure" className="pull-left" width="50" />
                                                <div className="media-body">
                                                    <h3>Safe And Secure</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 media-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".7s">
                                            <div className="media ">
                                                <img src="images/low-risk.svg" alt="secure" className="pull-left" width="50" />
                                                <div className="media-body">
                                                    <h3>Low Inflation Risk</h3>
                                                </div>
                                            </div>
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

export { About }