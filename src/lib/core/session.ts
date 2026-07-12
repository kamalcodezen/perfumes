import { authClient } from "../auth-client";


export const getUserSession = () => {
  const { data, isPending, error } = authClient.useSession();

  return {
    user: data?.user ?? null,
    session: data?.session ?? null,
    loading: isPending,
    error,
  };
};
