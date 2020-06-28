import React from 'react';

export default function (props) {
  const { min, max } = props;
  const number = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <p>Sorting a number between {props.min} and {props.max}:</p>
      <p> {number} </p>
    </div>
  );
};
