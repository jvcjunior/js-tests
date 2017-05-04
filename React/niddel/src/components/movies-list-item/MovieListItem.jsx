// <Dependencies></Dependencies>
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './MovieListItem.scss';

const MovieListItem = props => {
  const item = (
    <tr>
      <td className="text-left">{props.movie.Title}</td>
      <td className="text-left">{props.movie.Year}</td>
    </tr>
  );
  return item;
};

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieListItem;
