import React from 'react';
import { Link } from 'react-router-dom';

class ProjectListItem extends React.Component {
    render() {
        const { Name, Url} = this.props;

        return (
            <Link to="/project" >
                <div className="timer-box text-center">
                    <h2 className="mt0 project-tile-header">{Name}</h2>
                    <img src={Url} height='190' width='300'></img>
                    <a href="javascript:void(0);" class=" btn-alpha wow fadeInUp show-more-btn" data-wow-delay=".6s" data-wow-duration=".6s">Show More</a>
                </div>
            </Link>
        );
    }
}

export default ProjectListItem;