import { styles } from "./toast.css";

interface ToastStackProps {
  children: React.ReactNode;
}

export const ToastStack = ({ children }: ToastStackProps) => {
  return <div className={styles.toastStackContainer}>{children}</div>;
};
