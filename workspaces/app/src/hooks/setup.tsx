import { useContext, useEffect } from "react";
import { useAuthUser } from "./auth-user";
import { useNotifications } from "@/features/notification/use-notifications";
import { LoadingOverlayContext } from "@/components/ui/loading-overlay";
import { useOAuth } from "./oauth";

export const useSetup = () => {
  useOAuth();
  const { setIsLoading } = useContext(LoadingOverlayContext);
  const { isLoading: isAuthUserLoading } = useAuthUser();
  useNotifications();

  useEffect(() => {
    setIsLoading(isAuthUserLoading);
  }, [isAuthUserLoading, setIsLoading]);
};
