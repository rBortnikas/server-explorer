import { API } from "./API";
import { handleResponse } from "./utils";

export class AuthService {
  public static async authenticate(credentials: {
    username: string;
    password: string;
  }) {
    const response = await fetch(API.authentication, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    });

    return await handleResponse(response);
  }
}
