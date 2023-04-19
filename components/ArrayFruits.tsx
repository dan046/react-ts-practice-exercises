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
      <h3>Exercise 3: Word Length</h3>
      <p>
        Given an array of objects, use Array.map() to create a new array with a
        specific property value of each object.
      </p>
      <div>
        <h3>Answer:</h3>
        {stringLength}
      </div>
    </div>
  );
}
