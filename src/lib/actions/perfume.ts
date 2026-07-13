import { serverMutation } from "../core/server";

export const addPerfumes = async (data: unknown) => {
  return await serverMutation(`/api/perfumes`, data, "POST");
};
