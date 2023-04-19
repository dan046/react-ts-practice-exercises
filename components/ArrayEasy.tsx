import React = require('react');

export default function ArrayEasy() {
  const numbers = [1, 2, 3, 4, 5];
  const squared = numbers.map((item) => item * 2);

  return (
    <div>
      <h3>Original Values</h3>
      <p>{numbers.toLocaleString()}</p>
      <h3>The square of each values by mapping.</h3>
      <p>{squared.toLocaleString()}</p>
    </div>
  );
}
