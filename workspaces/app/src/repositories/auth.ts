import { serverFetch } from "@/utils/fetch";

interface AuthUser {
  name: string;
  imageURL: string;
}

interface GetTokenRequest {
  ott: string;
}

export interface IAuthRepository {
  getAuthUser: () => Promise<AuthUser | null>;
  getAuthUser$$key: () => string[];
  getToken: (param: GetTokenRequest) => Promise<string>;
  getToken$$key: (param: GetTokenRequest) => string[];
}

export class AuthRepositoryImpl implements IAuthRepository {
  async getAuthUser() {
    const res = await serverFetch("/api/user/me");

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return {
      name: data.name,
      imageURL: data.image_url,
    };
  }

  getAuthUser$$key() {
    return ["getAuthUser"];
  }

  async getToken(param: GetTokenRequest) {
    const res = await serverFetch(`/api/auth/token?ott=${param.ott}`);

    if (!res.ok) {
      throw new Error("Failed to get token");
    }

    const data = await res.json();

    if (!data.token) {
      throw new Error("Token not found");
    }

    return data.token;
  }

  getToken$$key(param: GetTokenRequest) {
    return ["getToken", param.ott];
  }
}
