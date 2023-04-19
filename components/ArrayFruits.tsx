import React = require('react');

export default function FruitsLength() {
  const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const stringLength = strings.map((string, index) => (
    <div key={index}>
      <p>
        The word '<strong>{string}</strong>' has a length of {string.length}{' '}
        characters.
      </p>
    </div>
  ));

  return (
    <div>
      <h3>How many letters does each fruit have?</h3>
      <div>{stringLength}</div>
    </div>
  );
}
