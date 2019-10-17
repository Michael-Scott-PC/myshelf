import React from 'react';
import BookItem from './BookItem';

const BooksList = ({ books, onBookSelect }) => {

    const renderedList = books.map((book) => {
        return (
            <BookItem
                key={book.id}
                book={book}
                onBookSelect={onBookSelect}
            />
        );
    });

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    );
};

export default BooksList;