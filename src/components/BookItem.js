import './BookItem.css';
import React from 'react';

const BookItem = ({ book, onBookSelect }) => {

    if (!book.volumeInfo.imageLinks) {
        return (
            <div onClick={() => onBookSelect(book)} className="item">
                <div className="content">
                    <div className="header">{book.volumeInfo.title}</div>
                    <div className="meta">{book.volumeInfo.authors}</div>
                    <div className="ui tiny star rating" data-rating="3" data-max-rating="5">Average Rating: {book.volumeInfo.averageRating} / 5</div>
                </div>
            </div>
        );
    }
    return (
        <div onClick={() => onBookSelect(book)} className="item">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="ui middle aligned tiny image"/>
            <div className="content">
                <div className="header">{book.volumeInfo.title}</div>
                <div className="meta">{book.volumeInfo.authors}</div>
                <div className="ui tiny star rating" data-rating="3" data-max-rating="5">Average Rating: {book.volumeInfo.averageRating} / 5</div>
            </div>
        </div>
    );
};

export default BookItem;