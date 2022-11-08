import {fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";


describe("LoginForm", () => {
  test("should display a blank login form, with remember me checked by default", async () => {
    // const { findByTestId } = RenderLoginForm();
    render(<LoginForm />);
    const loginForm =screen.getByTestId("login-form");
    expect(loginForm).toHaveFormValues({
      username: "",
      password: "",
    });
  });

  test("should allow entering a username", async () => {
    const onUsernameChange = jest.fn();
    // const { findByTestId } = RenderLoginForm({ onUsernameChange });
    render(<LoginForm onUsernameChange={onUsernameChange}/>)

    const username = screen.getByTestId("username");
    fireEvent.change(username, { target: { value: "test" } });
    expect(onUsernameChange).toHaveBeenCalledWith("test");
  });

  test("should allow entering a password", async () => {
    const onPasswordChange = jest.fn();
    render(<LoginForm onPasswordChange={onPasswordChange}/>)
    const username = screen.getByTestId("password");
    fireEvent.change(username, { target: { value: "password" } });

    expect(onPasswordChange).toHaveBeenCalledWith("password");
  });

  test("should submit the form with username, password, and remember", async () => {
    const onSubmit = jest.fn();
    // const { findByTestId } = LoginForm({ onSubmit });
    render(<LoginForm onSubmit={onSubmit}/>)
    const username = screen.getByTestId("username");
    const password = screen.getByTestId("password");
    const submit = screen.getByTestId("submit");
    fireEvent.change(username, { target: { value: "test" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.click(submit);
    expect(onSubmit).toHaveBeenCalledWith("test", "password");
  });
});
