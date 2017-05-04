// Dependencies
import React from 'react';
import MoviesList from '../movies-list/MoviesList.jsx';

// Styles
import './Content.scss';

const Content = (props) => {
  const list = (
    <div>
      <MoviesList movies={props.movies} />
    </div>
  );
  return list;
};

export default Content;
