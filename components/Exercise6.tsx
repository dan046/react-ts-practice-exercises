import React = require('react');

export default function Exercise6() {
  const products = [
    { id: 1, name: 'Apple', price: 0.5, quantity: 10 },
    { id: 2, name: 'Banana', price: 0.3, quantity: 20 },
    { id: 3, name: 'Cherry', price: 0.8, quantity: 5 },
    { id: 4, name: 'Date', price: 0.6, quantity: 15 },
  ];

  const filter = products.filter((filter) => filter.price <= 0.5);
  const newArray = filter.map((map) => <li>{map.name}</li>);
  return (
    <div>
      <h3>Exercise 6: Map and Filter Array Methods</h3>
      <p>
        Given an array of objects, use Array.filter() and Array.map() to create
        a new array with a specific property value of objects that meet a
        specific condition.
      </p>
      <p>
        Filter the array to create a new array with only the products whose
        price is less than or equal to 0.5, and then map the new array to create
        a new array with only the names of each product.
      </p>
      <div>
        <h3>Products whose price is less than or equal to $0.5</h3>
        <ul>{newArray}</ul>
      </div>
    </div>
  );
}
