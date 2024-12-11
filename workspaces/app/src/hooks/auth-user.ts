import { useQuery } from "@tanstack/react-query";
import { useRepositories } from "./repository";

export const useAuthUser = () => {
  const { authRepository } = useRepositories();

  const { data, isLoading } = useQuery({
    queryKey: authRepository.getAuthUser$$key(),
    queryFn: () => authRepository.getAuthUser(),
  });

  const isAuthenticated = data !== null;

  return { data, isLoading, isAuthenticated };
};
