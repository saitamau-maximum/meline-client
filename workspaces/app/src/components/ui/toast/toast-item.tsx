import { clsx } from "@/libs/clsx";
import { styles } from "./toast.css";
import { Link } from "react-router-dom";

interface ToastItemProps {
  children: React.ReactNode;
  to?: string;
}

export const ToastItem = ({ children, to }: ToastItemProps) => {
  if (to) {
    return (
      <Link to={to} className={clsx(styles.toastItemContainer, styles.link)}>
        {children}
      </Link>
    );
  }

  return <div className={styles.toastItemContainer}>{children}</div>;
};
