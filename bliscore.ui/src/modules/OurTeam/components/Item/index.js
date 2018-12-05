import React from 'react';

export function Item(props) {
    const delay = 0.1*props.Index + 0.2;
    return (
        <div className="col-md-3 col-sm-4 col-xs-6 wow fadeInUp" data-wow-delay={delay + 's'} data-wow-duration=".4s">
            <div className="our-team">
                <img src={props.Url} alt="team image" />
                <div className="team-content">
                    <h3 className="title">{props.Name}</h3>
                    <span className="post">{props.Post}</span>
                    <ul className="icon">
                        <li><a href="javascript:void(0);"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="javascript:void(0);"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="javascript:void(0);"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}