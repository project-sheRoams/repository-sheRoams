import LoginForm from "../components/auth/loginComponent";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
