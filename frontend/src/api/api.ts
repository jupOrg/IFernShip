import axios from "axios";

export const createApiInstance = (token?: string) => {
  const baseURL = "http://localhost:3000";
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
  return axios.create({ baseURL, headers });
};
