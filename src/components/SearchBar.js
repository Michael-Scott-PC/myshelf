import React from 'react';


class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onUserInput = (e) => {
        this.setState({ term: e.target.value });
    };
    
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                Search Books
                <form action="" onSubmit={this.onFormSubmit}>
                    <div className="ui fluid action input">
                        <input 
                            type="text" 
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={this.onUserInput}
                        ></input>
                        <button className="ui icon button">
                            <i className="search icon"></i>
                        </button>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;