import * as React from 'react';
import ArrayEasy from './components/ArrayEasy';
import FruitsLength from './components/ArrayFruits';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import './style.css';
import Card from './ui/Card';

export default function App() {
  return (
    <Card>
      <section className="container">
        <h1>React Exercises</h1>
        <div className="counter__container">
          <Counter />
        </div>
        <div className="toggle-form__container">
          <Toggle />
        </div>
      </section>
      <ArrayEasy />
      <FruitsLength />
    </Card>
  );
}
