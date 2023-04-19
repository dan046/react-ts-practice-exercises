import * as React from 'react';
import Counter from './components/Counter';
import SimpleForm from './components/SimpleForm';
import Toggle from './components/Toggle';
import './style.css';

export default function App() {
  return (
    <div className="main">
      <h1>Counter</h1>
      <section className="container">
        <Counter />
        <Toggle />
      </section>
    </div>
  );
}
