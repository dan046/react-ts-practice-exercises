import React = require('react');

export default function SimpleForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
  });
  const [isFormSubmitted, setisFormSubmitted] = React.useState(false);

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formChangeHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setisFormSubmitted(true);
  };

  return (
    <form className="form__container" onSubmit={formChangeHandler}>
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
          <p>Your email address is: {formData.email}</p>
        </div>
      )}

      <button>Submit</button>
    </form>
  );
}
