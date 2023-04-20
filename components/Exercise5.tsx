import React = require('react');

export default function Exercise5() {
  const products = [
    { id: 1, name: 'Apple', price: 0.5, quantity: 10 },
    { id: 2, name: 'Banana', price: 0.3, quantity: 20 },
    { id: 3, name: 'Cherry', price: 0.8, quantity: 5 },
    { id: 4, name: 'Date', price: 0.6, quantity: 15 },
  ];

  const filter = products.filter((qty) => qty.quantity > 10);
  const prices = filter.map((item) => <li>${item.price.toFixed(2)}</li>);

  return (
    <div>
      <h3>Exercise 5: Producing New Arrays</h3>
      <p>
        Given an array of objects, use Array.filter() and Array.map() to create
        a new array with a specific property value of objects that meet a
        specific condition.
      </p>
      <h3>Task:</h3>
      <p>
        Filter the array to create a new array with only the products whose
        quantity is greater than or equal to 10, and then map the new array to
        create a new array with only the prices of each product.
      </p>
      <h3>Answer:</h3>
      <div>
        <h4>
          Prices of Products whose quantity is greater than or equal to 10
        </h4>
        <ul>{prices}</ul>
      </div>
    </div>
  );
}
