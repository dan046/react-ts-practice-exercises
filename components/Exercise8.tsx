import React = require('react');

export default function Exercise8() {
  const products = [
    { id: 1, name: 'Apple', price: 0.5, quantity: 10 },
    { id: 2, name: 'Banana', price: 0.3, quantity: 20 },
    { id: 3, name: 'Cherry', price: 0.8, quantity: 5 },
    { id: 4, name: 'Date', price: 0.6, quantity: 15 },
  ];
  const map = products.map((item) => item.price);
  const filter = map.filter((item) => item >= 0.5);
  const reduce = filter.reduce((acc, current) => acc + current, 0);

  return (
    <div>
      <h3>Exercise 8: Map, Filter, Reduce Array Methods</h3>
      <p>
        Map the array to create a new array with only the prices of each
        product, and then filter the new array to create a new array with only
        the prices that are greater than or equal to 0.5. Finally, use
        Array.reduce() to calculate the sum of the prices in the new array.
      </p>
      <div>
        <h3>Prices whose value are greater than or equal to $0.50</h3>
        <ul>
          {filter.map((prices) => (
            <li>${prices.toFixed(2)}</li>
          ))}
        </ul>
        <h3>Total:</h3>
        <p>${reduce.toFixed(2)}</p>
      </div>
    </div>
  );
}
