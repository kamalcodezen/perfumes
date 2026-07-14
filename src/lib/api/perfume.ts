import { serverFetch } from "../core/server";

// all perfumes get (with Pagination / TanStack Query support)
export const getPerfumes = async ({pageParam = 1,}: { pageParam?: number } = {}) => {
  return await serverFetch(`/api/perfumes?page=${pageParam}&limit=8`);
};

// perfumes get by id
export const getPerfumesById = async (id: string) => {
  return await serverFetch(`/api/perfumes/${id}`);
};
