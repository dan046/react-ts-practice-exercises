import React = require('react');

export default function Products() {
  // Given an array of objects, use Array.map() to create a new array with a specific property value of each object.
  // Sample Data:
  const products = [
    { id: 1, name: 'Apple', price: 0.5 },
    { id: 2, name: 'Banana', price: 0.3 },
    { id: 3, name: 'Cherry', price: 0.8 },
    { id: 4, name: 'Date', price: 0.6 },
  ];
  // Task: Map the array to create a new array with only the prices of each product.
  const prices = products.map((data, index) => (
    <div key={index}>
      <li>${data.price.toFixed(2)}</li>
    </div>
  ));
  return (
    <div className="price__container">
      <h3>Fruit Prices</h3>
      <div>{prices}</div>
    </div>
  );
}
