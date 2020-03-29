import { API } from "../API";
import { handleResponse } from "../utils";

export class ServerService {
  public static async fetchServers(token: string) {
    const response = await fetch(API.servers, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    return await handleResponse(response);
  }
}
