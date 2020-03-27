import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  test("submits with both inputs filled in and returns credentials", async () => {
    const onSubmit = jest.fn();
    const { getByText, getByTestId } = render(
      <LoginForm onSubmit={onSubmit} />
    );

    const usernameInput = getByTestId("username-input");
    const passwordInput = getByTestId("password-input");
    const loginButton = getByText("Log In");

    const mockUsername = "mockUsername";
    const mockPassword = "mockPassword";

    await wait(() => {
      fireEvent.change(usernameInput, {
        target: { value: mockUsername }
      });
      fireEvent.change(passwordInput, {
        target: { value: mockPassword }
      });

      fireEvent.click(loginButton);
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      username: mockUsername,
      password: mockPassword
    });
  });

  describe("error handling", async () => {});
  test("does not submit with a missing input and displays the correct error", async () => {
    const onSubmit = jest.fn();
    const { queryByText, getByText, getByTestId } = render(
      <LoginForm onSubmit={onSubmit} />
    );

    const usernameInput = getByTestId("username-input");
    const loginButton = getByText("Log In");
    const mockUsername = "mockUsername";

    await wait(() => {
      fireEvent.change(usernameInput, {
        target: { value: mockUsername }
      });
      fireEvent.click(loginButton);
    });

    const passwordErrorLabel = getByText("Password cannot be blank");
    const usernameErrorLabel = queryByText("Username cannot be blank");

    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(passwordErrorLabel).toBeTruthy();
    expect(usernameErrorLabel).toBeNull();
  });
});
