import { createContext } from "react";

interface LoadingOverlayContextProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const LoadingOverlayContext = createContext<LoadingOverlayContextProps>({
  isLoading: false,
  setIsLoading: () => void 0,
});
