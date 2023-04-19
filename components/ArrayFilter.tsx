import React = require('react');

export default function ArrayFilter() {
  // Given an array of objects, use Array.filter() to create a new array with objects that have a specific property value.
  const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Alice', age: 40 },
  ];
  // Filter the array to create a new array with users whose age is greater than or equal to 35.
  const filter = users
    .filter((data) => data.age >= 35)
    .map((age, index) => (
      <div key={index}>
        <li>
          {age.name} is {age.age} years old.
        </li>
      </div>
    ));

  return (
    <div>
      <h3>Users whose age is greater than or equal to 35</h3>
      <span>{filter}</span>
    </div>
  );
}
