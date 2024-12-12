interface AuthUser {
  name: string;
  imageURL: string;
}

export interface IAuthUserRepository {
  getAuthUser: () => Promise<AuthUser | null>;
  getAuthUser$$key: () => string[];
}

export class AuthUserRepositoryImpl implements IAuthUserRepository {
  async getAuthUser() {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/user/me`);

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
