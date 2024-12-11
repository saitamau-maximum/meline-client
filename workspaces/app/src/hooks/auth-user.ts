import { useQuery } from "@tanstack/react-query";
import { useRepositories } from "./repository";
import { useEffect } from "react";
import { JWT_STORAGE_KEY } from "@/config";

export const useAuthUser = () => {
  const { authRepository } = useRepositories();

  const { data, isLoading } = useQuery({
    queryKey: authRepository.getAuthUser$$key(),
    queryFn: () => authRepository.getAuthUser(),
  });

  const isAuthenticated = data !== null;

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem(JWT_STORAGE_KEY);
    }
  }, [isAuthenticated]);

  return { data, isLoading, isAuthenticated };
};
