// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../header/Header.jsx';
import Content from '../content/Content.jsx';
import Footer from '../footer/Footer.jsx';

// Styles
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      page: 1,
      movies: [],
    };

    if (props.term) {
      this.videoSearch(props.term, props.page);
    }
  }

  videoSearch(term, page) {
    fetch(`http://www.omdbapi.com/?s=${term}&page=${page}`)
      .then(response => response.json())
      .then(movies => this.setState({ movies: movies.Search }));
  }

  searchTermChanged(term) {
    this.setState({ term });
    this.videoSearch(term, this.state.page);
    // debugger // eslint-disable-line
  }

  render() {
    return (
      <div className="site-wrapper">
        <Header onSearchTermChange={term => this.searchTermChanged(term)} />
        <Content movies={this.state.movies} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  term: PropTypes.string,
  page: PropTypes.number,
  movies: PropTypes.array,
};

export default App;
