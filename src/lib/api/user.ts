import { serverFetch } from "../core/server";

export const getUsers = async () => {
  return await serverFetch("/api/user");
};
