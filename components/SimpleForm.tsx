import React = require('react');

export default function SimpleForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  const [isFormSubmitted, setisFormSubmitted] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setisFormSubmitted(false);
  };

  const formChangeHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (formData.name.length === 0) {
      setisFormSubmitted(false);
      setErrorMsg(`Name must not be empty`);
      return false;
    }
    if (formData.email.length === 0) {
      setisFormSubmitted(false);
      setErrorMsg('Email must not be empty');
      return false;
    }
    if (formData.password.length === 0) {
      setisFormSubmitted(false);
      setErrorMsg('Password must not be empty');
      return false;
    }
    if (formData.password.length < 6) {
      setisFormSubmitted(false);
      setErrorMsg('Must not be less than 6 characters');
      return false;
    }
    setisFormSubmitted(true);
    setErrorMsg('');
    return true;
  };

  return (
    <form className="form__container" onSubmit={formChangeHandler}>
      <h3>Simple Form</h3>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
        />
      </div>

      <div>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </div>

      {isFormSubmitted && (
        <div>
          <p>Hello, {formData.name}.</p>
          <p>Your email: {formData.email}</p>
        </div>
      )}
      <button>Submit</button>
      <small style={{ color: 'red' }}>{errorMsg}</small>
    </form>
  );
}
