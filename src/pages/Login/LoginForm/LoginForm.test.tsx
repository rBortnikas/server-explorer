import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { LoginForm } from "./LoginForm";
import { FetchErrors } from "src/api/utils";

describe("LoginForm", () => {
  test("submits with both inputs filled in and returns credentials", async () => {
    const onSubmit = jest.fn();
    const { getByText, getByTestId } = render(
      <LoginForm onSubmit={onSubmit} isLoading={false} loginError={undefined} />
    );

    const usernameInput = getByTestId("username-input");
    const passwordInput = getByTestId("password-input");
    const loginButton = getByText("Log in");

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

  test("does not submit with a missing input and displays the correct error", async () => {
    const onSubmit = jest.fn();
    const { queryByText, getByText, getByTestId } = render(
      <LoginForm onSubmit={onSubmit} isLoading={false} loginError={undefined} />
    );

    const usernameInput = getByTestId("username-input");
    const loginButton = getByText("Log in");
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

  test("shows the correct login error when unauthorized", async () => {
    const { getByText } = render(
      <LoginForm
        onSubmit={() => {}}
        isLoading={false}
        loginError={FetchErrors.Unauthorized}
      />
    );

    const error = getByText("Please check your login details and try again.");

    expect(error).toBeTruthy();
  });
});
