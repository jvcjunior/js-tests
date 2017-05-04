// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from '../movies-list-item/MovieListItem.jsx';

// Styles
import './MoviesList.scss';

const MoviesList = (props) => {
  const videoItems = props.movies.map(movie => <MovieListItem movie={movie} key={movie.imdbID} />);

  return (
    <table className="table-fill">
      <thead>
        <tr>
          <th className="text-left">Title</th>
          <th className="text-left">Year</th>
        </tr>
      </thead>
      <tbody className="table-hover">
        {videoItems}
      </tbody>
    </table>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
