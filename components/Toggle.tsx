import React = require('react');
import SimpleForm from './SimpleForm';

export default function Toggle() {
  const [status, setStatus] = React.useState(false);

  const switchHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setStatus((current) => !current);
  };

  const statusText = status ? <SimpleForm /> : '';
  const buttonText = status ? 'Close Form' : 'Open Form';

  return (
    <section className="toggle">
      <button onClick={switchHandler}>{buttonText}</button>
      <span>{statusText}</span>
    </section>
  );
}
