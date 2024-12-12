import React from "react";
import { DefaultRepositories } from "@/repositories";
import { RepositoryContext } from "./context";

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const RepositoryProvider = ({ children }: LoadingProviderProps) => {
  return (
    <RepositoryContext.Provider value={DefaultRepositories}>
      {children}
    </RepositoryContext.Provider>
  );
};
