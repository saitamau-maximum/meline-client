import { JWT_STORAGE_KEY } from "@/config";
import { env } from "@/env";

export const serverFetch = (input: string, init?: RequestInit) => {
  if (!input.startsWith("/")) {
    throw new Error("[serverFetch]: input must start with /");
  }
  const headers = new Headers(init?.headers);
  if (localStorage.getItem(JWT_STORAGE_KEY)) {
    headers.set(
      "Authorization",
      `Bearer ${localStorage.getItem(JWT_STORAGE_KEY)}`
    );
  }
  return fetch(env("SERVER_BASE_URL") + input, {
    ...init,
    headers,
  });
};
