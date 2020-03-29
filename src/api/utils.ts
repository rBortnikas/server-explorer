export enum FetchErrors {
  Unauthorized = "unauthorized 401",
  Other = "other"
}

export async function handleResponse(response: Response) {
  if (response.status === 401) {
    throw FetchErrors.Unauthorized;
  }
  if (response.status < 200 || response.status > 399) {
    throw FetchErrors.Other;
  }
  return await response.json();
}
