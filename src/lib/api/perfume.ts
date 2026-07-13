import { serverFetch } from "../core/server";

// all perfumes get
export const getPerfumes = async () => {
  return await serverFetch("/api/perfumes");
};

// perfumes get by id
export const getPerfumesById = async (id: string) => {
  return await serverFetch(`/api/perfumes/${id}`);
};

