import React from 'react';

import SearchBar from './SearchBar';
import BooksList from './BooksList';
import BookDetail from './BookDetail';
import googleBooks from '../apis/googleBooks';

class App extends React.Component {
  state = {
    books: [],
    selectedBook: null
  };

  onTermSubmit = async term => {
    const response = await googleBooks.get('/books/v1/volumes', {
      params: {
        q: term
      }
    });

    console.log(response.data);
  };

  render() {
    return (
      <div className="ui container app">
        <div className="ui grid">
          <div className="ui row">
            <div className="fourteen wide column">
              <SearchBar onTermSubmit={this.onTermSubmit} />
            </div>
          </div>
          <div className="ui row">
            <div className="eleven wide column">
              <BookDetail />
            </div>
            <div className="five wide column">
              <BooksList />
              <BooksList />
              <BooksList />
              <BooksList />
              <BooksList />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

  export default App;
