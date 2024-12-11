import { env } from "@/env";

export const serverFetch = (input: string, init?: RequestInit) => {
  if (!input.startsWith("/")) {
    throw new Error("[serverFetch]: input must start with /");
  }
  return fetch(env("SERVER_BASE_URL") + input, init);
};
