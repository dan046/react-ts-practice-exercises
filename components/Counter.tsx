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
      <h3>Exercise 1: Create a counter. </h3>
      <p>A value should be added when the user clicks a button. </p>
      <small>BONUS: ADD A BUTTON THAT RESETS THE COUNTER BACK TO 0.</small>
      <h3>Counter: {counter}</h3>
      <div className="button__container">
        <button onClick={countHandler}>Click to Count</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </section>
  );
}
