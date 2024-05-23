// import styles from './login.module.css'; 

// const LoginPage = () => {
//   return <LoginForm />;
// };

// export default LoginPage;



import LoginForm from "../components/auth/LoginComponent";
import styles from './login.module.css';

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
