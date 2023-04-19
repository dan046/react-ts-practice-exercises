import React = require('react');

export default function Counter() {
  const [counter, setCounter] = React.useState(0);
  const countHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCounter((counter) => counter + 1);
  };
  const resetHandler = (e: any) => {
    e.preventDefault();
    setCounter(0);
  };
  return (
    <section className="counter">
      <h3>Counter: {counter}</h3>
      <div className="button__container">
        <button onClick={countHandler}>Click to Count</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </section>
  );
}
