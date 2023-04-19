import React = require('react');

export default function FruitsLength() {
  const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const stringLength = strings.map((string) => string.length);

  return (
    <div>
      <span>{stringLength}</span>
    </div>
  );
}
