import { GithubIcon } from "@/components/icons/github";
import { styles } from "./auth-pane.css";
import { env } from "@/env";

export const AuthPane = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.content}
        href={env("SERVER_BASE_URL") + "/api/auth/login"}
      >
        <GithubIcon />
        <span className={styles.loginLabel}>Githubでログイン</span>
      </a>
    </div>
  );
};
