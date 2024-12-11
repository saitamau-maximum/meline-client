import { serverFetch } from "@/utils/fetch";

interface AuthUser {
  name: string;
  imageURL: string;
}

export interface IAuthRepository {
  getAuthUser: () => Promise<AuthUser | null>;
  getAuthUser$$key: () => string[];
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
}
