import { GithubIcon } from "@/components/icons/github";
import { styles } from "./auth-pane.css";

export const AuthPane = () => {
  return (
    <div className={styles.container}>
      <a className={styles.content} href={`${import.meta.env.VITE_SERVER_BASE_URL}/api/auth/login`}>
        <GithubIcon />
        <span className={styles.loginLabel}>Githubでログイン</span>
      </a>
    </div>
  );
};
