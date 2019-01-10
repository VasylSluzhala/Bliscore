import React from 'react';
import { Link } from 'react-router-dom';

class ProjectListItem extends React.Component {
    render() {
        return (
            <Link to="/project" >
                <div className="timer-box text-center">
                    <h2 className="mt0">ICO ENDS IN </h2>
                    <div className="timer">
                        <div className="days"></div>
                        <div className="hours"></div>
                        <div className="minutes"></div>
                        <div className="seconds"></div>
                    </div>
                    <a href="javascript:void(0);" class=" btn-alpha wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".6s">Join & Buy Now </a>
                </div>
            </Link>
        );
    }
}

export default ProjectListItem;