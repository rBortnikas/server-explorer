import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { store, history } from "./store";
import { API } from "src/api/API";
import { Paths } from "src/paths";
import { App } from "./App";

const ServerExplorer = <App store={store} history={history} />;

function fetchMock(url: string) {
  function json() {
    if (url === API.authentication) {
      return { token: "12345678" };
    }

    if (url === API.servers) {
      return [
        { name: "AAAAA", distance: 500 },
        { name: "CCCCC", distance: 1000 },
        { name: "BBBBB", distance: 100 }
      ];
    }

    return undefined;
  }

  return { json };
}

describe("Server Explorer Integration", () => {
  beforeAll(() => {
    jest.setTimeout(30000);
    window.fetch = jest.fn().mockImplementation(fetchMock);
  });

  describe("when user first visits login page", () => {
    test("page renders", () => {
      const { getByText } = render(ServerExplorer);

      const logo = getByText("server explorer");
      expect(logo).toBeTruthy();
    });

    test("user logs in", async () => {
      const { getByText, getByTestId } = render(ServerExplorer);

      const usernameInput = getByTestId("username-input");
      const passwordInput = getByTestId("password-input");
      const loginButton = getByText("Log in");

      await wait(() => {
        fireEvent.change(usernameInput, {
          target: { value: "mockUsername" }
        });
        fireEvent.change(passwordInput, {
          target: { value: "mockPassword" }
        });

        fireEvent.click(loginButton);
      });

      await wait(() => getByText("AAAAA"));
      const server = getByText("AAAAA");
      expect(window.location.pathname).toEqual(Paths.Servers);
      expect(server).toBeTruthy();
    });

    test("user logs out", async () => {
      const { getByText } = render(ServerExplorer);

      const logoutButton = getByText("Log out");

      fireEvent.click(logoutButton);

      await wait(() => getByText("Log in"));
      const loginButton = getByText("Log in");

      expect(window.location.pathname).toEqual(Paths.Root);
      expect(loginButton).toBeTruthy();
    });
  });
});
