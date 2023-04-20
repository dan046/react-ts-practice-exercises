import * as React from 'react';
import ArrayEasy from './components/ArrayEasy';
import ArrayFilter from './components/ArrayFilter';
import FruitsLength from './components/ArrayFruits';
import ArrayProductFilter from './components/ArrayProductFilter';
import Counter from './components/Counter';
import Exercise5 from './components/Exercise5';
import Exercise6 from './components/Exercise6';
import FilterGender from './components/Exercise7';
import Toggle from './components/Toggle';
import './style.css';
import Card from './ui/Card';

export default function App() {
  return (
    <Card>
      <h1>React Exercises</h1>
      <section className="container">
        {/* <div className="counter__container">
          <Counter />
        </div>
        <div className="squaredValues__container">
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
        </div> */}
        {/* <div className="exercise5__container">
          <Exercise5 />
        </div> */}
        {/* <div className="exercise6__container">
          <Exercise6 />
        </div> */}
        <div className="exercise7__container">
          <FilterGender />
        </div>
        <div className="toggle-form__container">
          <Toggle />
        </div>
      </section>
    </Card>
  );
}
