import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <li><a href="javascript:void(0);"><FontAwesomeIcon icon={["fab","facebook-f"]} size="lg" className="img-responsive"/></a></li>
                        <li><a href="javascript:void(0);"><FontAwesomeIcon icon={["fab","linkedin-in"]} size="lg" className="img-responsive"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}