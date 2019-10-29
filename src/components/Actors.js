import React from 'react';

const Actors = (props) => {
  return (
    <div>
      <h1>Actors Page</h1>
      {props.info.map((actor) => (
        <div>
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map((movie) => (
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
