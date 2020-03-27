import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  test("submits with both inputs filled in", async () => {
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
});
