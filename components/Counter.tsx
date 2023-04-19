import React = require('react');

export default function Counter() {
  const [counter, setCounter] = React.useState(0);
  const countHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCounter((counter) => counter + 1);
  };
  return (
      <section className="counter">
        <span>Count: {counter}</span>
        <button onClick={countHandler}>Click to Count</button>
      </section>
  );
}
