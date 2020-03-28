import { API } from "./API";
import { handleResponse } from "./utils";

interface Credentials {
  username: string;
  password: string;
}
export class AuthService {
  private static async authenticate(credentials: Credentials) {
    // might not need to be public and/or static
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
    const { token } = await this.authenticate(credentials);
    this.storeAuthToken(token);
  }

  private static storeAuthToken(token: string) {
    window.localStorage.setItem("authToken", token);
  }

  public static getAuthToken() {
    return window.localStorage.getItem("authToken");
  }

  public static logout() {
    window.localStorage.removeItem("authToken");
  }
}
