import React = require('react');

export default function FilterGender() {
  const users = [
    { id: 1, name: 'John', age: 25, gender: 'male' },
    { id: 2, name: 'Jane', age: 30, gender: 'female' },
    { id: 3, name: 'Bob', age: 35, gender: 'male' },
    { id: 4, name: 'Alice', age: 40, gender: 'female' },
    { id: 5, name: 'Chris', age: 45, gender: 'non-binary' },
  ];
  const filter = users.filter(
    (user) => user.age >= 30 && user.gender !== 'female'
  );
  const userNames = filter.map((user) => (
    <li>
      {user.name} is a {user.gender}.
    </li>
  ));

  return (
    <div>
      <h3>Exercise 7: Map and Filter Array Methods</h3>
      <p>
        Filter the array to create a new array with only the users whose age is
        greater than or equal to 30 and whose gender is not female, and then map
        the new array to create a new array with only the names of each user.
      </p>
      <div>
        <h3>
          User's who age is equal or greater than 30 and gender is not female
        </h3>
        <ul>{userNames}</ul>
      </div>
    </div>
  );
}
