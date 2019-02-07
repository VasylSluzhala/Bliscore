import React from 'react';
import { Link } from 'react-router-dom';

class ProjectListItem extends React.Component {
    render() {
        const { Name, Url, Id} = this.props;

        return (
            <Link to={`/project/${Id}`}>
                <div className="timer-box text-center">
                    <h2 className="mt0 project-tile-header">{Name}</h2>
                    <img src={Url} width='100%' className="image-ptoject-list"></img>
                    <a href="javascript:void(0);" className=" btn-alpha wow fadeInUp show-more-btn" data-wow-delay=".6s" data-wow-duration=".6s">Show More</a>
                </div>
            </Link>
        );
    }
}

export default ProjectListItem;