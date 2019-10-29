import React from 'react';
const Movies = (props) => {
  return (
    <div>
      <h1>Movies Page</h1>
      {props.info.map((movie) => (
        <div>
          <h3>{movie.title}</h3>
          <p>({movie.time} mins)</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
