import { sendRequest } from "./helpers";

// Post Request for Login User
export const login = formData =>
  sendRequest("POST", `${window.BASE_URL}/login`, formData);
