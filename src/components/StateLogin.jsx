import { useState } from 'react';

export default function Login() {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Login form submitted');
    console.log('Entered values:', enteredValues);

    setEnteredValues({
      email: '',
      password: ''
    });
  };

  const handleInputBlur = identifier => {
    setDidEdit(prevState => ({
      ...prevState,
      [identifier]: true
    }));
  };

  //const handleEmailChange = e => setEnteredEmail(e.target.value);
  //const handlePasswordChange = e => setEnteredPassword(e.target.value);

  const handleInputChange = (identifier, e) => {
    setEnteredValues(prevState => ({
      ...prevState,
      [identifier]: e.target.value
    }));
    setDidEdit(prevState => ({
      ...prevState,
      [identifier]: false
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login (with State)</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleInputChange('email', e)}
            value={enteredValues.email}
            onBlur={() => handleInputBlur('email')}
          />
          {emailIsInvalid && <p className="control-error">Please enter a valid email.</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleInputChange('password', e)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
