import React from 'react';

const Directors = (props) => {
  return (
    <div>
      <h1>Directors Page</h1>
      {props.info.map((director) => (
        <div>
          <h3>{director.name}</h3>
          <ul>
            {director.movies.map((movie) => (
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;
