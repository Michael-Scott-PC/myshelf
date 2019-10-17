import React from 'react';


const BookDetail = ({ book }) => {
    if (!book) {
        return <div className="">Loading...</div>;
    }

    else if (!book.volumeInfo.imageLinks) {
        return (
            <div className="book-detail">
                <div className="ui grid">
                    <div className="row">
                        <div className="three wide column">
                        </div>
                        <div className="thirteen wide column">
                        <div className="content">
                            <div className="header">{book.volumeInfo.title}</div>
                            <div className="ui tiny star rating" data-rating="3" data-max-rating="5">Average Rating: {book.volumeInfo.averageRating}</div>
                            <div className="meta">{book.volumeInfo.authors}</div>
                            <p className="">
                                {book.volumeInfo.description}
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="book-detail">
                <div className="ui grid">
                    <div className="row">
                        <div className="three wide column">
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="ui middle aligned large image"/>
                        </div>
                        <div className="thirteen wide column">
                        <div className="content">
                            <div className="header">{book.volumeInfo.title}</div>
                            <div className="ui tiny star rating" data-rating="3" data-max-rating="5">Average Rating: {book.volumeInfo.averageRating}</div>
                            <div className="meta">{book.volumeInfo.authors}</div>
                            <p className="">
                                {book.volumeInfo.description}
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default BookDetail;