import { useState } from 'react';

import Input from '../components/Input.jsx';

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
  const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length === 0;

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
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          onChange={(e) => handleInputChange('email', e)}
          onBlur={() => handleInputBlur('email')}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email address.'}
        />
        <Input
          label="Password"
          type="password"
          id="password"
          name="password"
          onChange={(e) => handleInputChange('password', e)}
          onBlur={() => handleInputBlur('password')}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password.'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
