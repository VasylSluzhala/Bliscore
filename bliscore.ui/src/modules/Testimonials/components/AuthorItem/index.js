import React from 'react';

export function AuthorItem(props) {
    return (
        // <div class="item active wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".5s">
        <div class={"item" + (props.Index === 0 ? "active wow fadeInUp" : "" )}>
            <div class="media">
                <div class="media-left"><img src={props.Person.Url} alt="author" /></div>
                <div class="media-body media-middle">
                    <p>{props.Person.Text}</p>
                    <span class="author-name text-muted"><strong>- {props.Person.FullName}</strong></span>
                </div>
            </div>
        </div>
    );
}