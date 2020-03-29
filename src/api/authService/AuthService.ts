import { API } from "../API";
import { handleResponse } from "../utils";
import { Credentials } from "./types";

export class AuthService {
  private static async authenticate(credentials: Credentials) {
    const response = await fetch(API.authentication, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    });

    return await handleResponse(response);
  }

  public static async login(credentials: Credentials) {
    const { token } = await AuthService.authenticate(credentials);
    AuthService.storeAuthToken(token);
  }

  private static storeAuthToken(token: string) {
    window.localStorage.setItem("authToken", token);
  }

  public static getAuthToken() {
    return window.localStorage.getItem("authToken");
  }

  public static get isLoggedIn() {
    return !!AuthService.getAuthToken();
  }

  public static logout() {
    window.localStorage.removeItem("authToken");
  }
}
