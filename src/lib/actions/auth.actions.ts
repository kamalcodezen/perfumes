import { authClient } from "../auth-client";

export const signOUt = async () => {
  const { error } = await authClient.signOut();

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
