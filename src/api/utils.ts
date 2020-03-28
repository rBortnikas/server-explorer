export async function handleResponse(response: Response) {
  if (response.status < 200 || response.status > 399) {
    throw new Error(`response status: ${response.statusText}`);
  }
  return await response.json();
}
