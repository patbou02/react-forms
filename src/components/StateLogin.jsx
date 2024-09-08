import useInput from '../hooks/useInput.jsx';
import Input from '../components/Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/Validation.js';

export default function Login() {

  const { value: emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailHasError } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const { value: passwordValue, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordHasError } = useInput('', (value) => hasMinLength(value, 8));

  const handleSubmit = e => {
    e.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log('Sending HTTP request...');
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
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email address.'}
        />
        <Input
          label="Password"
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password.'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
