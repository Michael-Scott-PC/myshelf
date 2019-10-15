import React from 'react';
import photo from '../static/img/all_the_light.jpg';

class BookItem extends React.Component {
    render() {
        return (
            <div className="ui relaxed divided list">
                <div className="item">
                    <img src={photo} alt="book thumbnail" className="ui middle aligned tiny image"/>
                    <div className="content">
                        <div className="header">All the Light We Cannot See</div>
                        <div className="meta">Anthony Doerr</div>
                        <div className="ui tiny star rating" data-rating="3" data-max-rating="5"></div>
                    </div>
                </div>
            </div>
        );
    };
};

export default BookItem;