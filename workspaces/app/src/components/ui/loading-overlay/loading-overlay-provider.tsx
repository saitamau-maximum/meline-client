import { useState } from "react";
import { LoadingOverlayContext } from "./loading-overlay-context";

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingOverlayProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingOverlayContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingOverlayContext.Provider>
  );
};
