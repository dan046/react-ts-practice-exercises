import React = require('react');

export default function ArrayEasy() {
  const numbers = [1, 2, 3, 4, 5];
  const squaredValues = numbers.map((number) => number ** 2);

  return (
    <div>
      <h3>Original Values</h3>
      <p>{numbers.join(', ').toLocaleString()}</p>
      <h3>Squared Values</h3>
      <p>{squaredValues.join(', ').toLocaleString()}</p>
    </div>
  );
}
