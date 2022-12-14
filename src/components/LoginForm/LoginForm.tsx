import React from "react";

export interface Props {
  onUsernameChange?: (username: string) => void;
  onPasswordChange?: (password: string) => void;
  onSubmit?: (username: string, password: string) => void;
}

function LoginForm(props:Props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
 

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
    props.onUsernameChange?.(value)
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    props.onPasswordChange?.(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit?.(username, password);
  };

  return (
    <form data-testid="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        data-testid="username"
        type="text"
        name="username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        data-testid="password"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />


      <button type="submit" data-testid="submit">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;