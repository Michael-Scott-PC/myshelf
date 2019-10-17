import React from 'react';

import SearchBar from './SearchBar';
import BooksList from './BooksList';
import BookDetail from './BookDetail';
import googleBooks from '../apis/googleBooks';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  state = {
    books: [],
    selectedBook: null,
    bookISBN: ''
  };

  componentDidMount() {
    this.onTermSubmit({ term: 'top books of the month' });

    console.log(window.windowISBN);
  };

  componentDidUpdate() {
    console.log(window.windowISBN);
    console.log(window.viewer)
  };

  onTermSubmit = async term => {
    const response = await googleBooks.get('/books/v1/volumes', {
      params: {
        q: term
      }
    });

    this.setState({
      books: response.data.items,
      selectedBook: response.data.items[0],
      bookISBN: `${response.data.items[0].volumeInfo.industryIdentifiers[0].identifier}`
    });
    window.initialize(`${response.data.items[0].volumeInfo.industryIdentifiers[0].identifier}`);
  };

  onBookSelect = (book) => {
    this.setState({ 
      selectedBook: book,  
      bookISBN: `${book.volumeInfo.industryIdentifiers[0].identifier}`,
      pdf: book.accessInfo.webReaderLink
    });
    window.initialize(`${book.volumeInfo.industryIdentifiers[0].identifier}`);
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
              <div id="viewerCanvas" src={this.state.bookISBN} style={{width: '100%', height: '60%'}} className="row">
                  Preview
              </div>
              <div className="" style={{'margin-top': '2%'}}>
              <BookDetail book={this.state.selectedBook} /> 
              </div>
            </div>
            <div className="five wide column">
              <BooksList 
                books={this.state.books} 
                onBookSelect={this.onBookSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

  export default App;
