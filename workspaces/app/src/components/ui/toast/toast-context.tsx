import React, { createContext } from "react";

interface ToastOptions {
  timeout: number;
  to: string;
}

interface ToastContextProps {
  pushToast: (
    children: React.ReactNode,
    options?: Partial<ToastOptions>
  ) => void;
}

export const ToastContext = createContext<ToastContextProps>({
  pushToast: () => {
    throw new Error("ToastContext is not implemented");
  },
});
