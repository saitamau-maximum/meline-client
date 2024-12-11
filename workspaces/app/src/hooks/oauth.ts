import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRepositories } from "./repository";
import { JWT_STORAGE_KEY } from "@/config";
import { useQueryClient } from "@tanstack/react-query";

export const useOAuth = () => {
  const [param] = useSearchParams();
  const { authRepository } = useRepositories();
  const queryClient = useQueryClient();

  const getJwt = useCallback(
    async (ott: string) => {
      try {
        const token = await authRepository.getToken({ ott });
        localStorage.setItem(JWT_STORAGE_KEY, token);
        queryClient.invalidateQueries({
          queryKey: authRepository.getAuthUser$$key(),
        });
      } catch {
        // DO NOTHING
      }
    },
    [authRepository, queryClient]
  );

  useEffect(() => {
    const ott = param.get("ott");
    if (ott) getJwt(ott);
  }, [param, getJwt]);
};
