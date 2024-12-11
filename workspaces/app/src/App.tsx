import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RepositoryProvider } from "./providers/repository";
import { useSetup } from "./hooks/setup";
import { ToastProvider } from "./components/ui/toast/toast-provider";
import {
  LoadingOverlay,
  LoadingOverlayProvider,
} from "./components/ui/loading-overlay";

const AppRoot = () => {
  useSetup();

  return (
    <Suspense>
      <AppRoutes />
    </Suspense>
  );
};

const App = () => {
  const queryClient = new QueryClient();

  return (
    <RepositoryProvider>
      <QueryClientProvider client={queryClient}>
        <LoadingOverlayProvider>
          <LoadingOverlay />
          <BrowserRouter>
            <ToastProvider>
              <AppRoot />
            </ToastProvider>
          </BrowserRouter>
        </LoadingOverlayProvider>
      </QueryClientProvider>
    </RepositoryProvider>
  );
};

export default App;
