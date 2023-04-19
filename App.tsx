import * as React from 'react';
import ArrayEasy from './components/ArrayEasy';
import ArrayFilter from './components/ArrayFilter';
import FruitsLength from './components/ArrayFruits';
import ArrayProductFilter from './components/ArrayProductFilter';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import './style.css';
import Card from './ui/Card';

export default function App() {
  return (
    <Card>
      <h1>React Exercises</h1>
      <section className="container">
        <div className="counter__container">

          <Counter />
        </div>
        <div className="squaredValues__container">
          <h3>Exercise 2: Map Array Method</h3>
          <p>
            Use an array method on the original values showing each squared
            value.
          </p>
          <ArrayEasy />
        </div>
        <div className="fruitsLength__container">

          <FruitsLength />
        </div>
        <div className="arrayFilter__container">
          <ArrayFilter />
        </div>
        <div className="productPrices__container">
          <ArrayProductFilter />
        </div>
        <div className="toggle-form__container">
          <Toggle />
        </div>
      </section>
    </Card>
  );
}
