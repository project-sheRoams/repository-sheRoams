import Link from "next/link";
import styles from './Login.module.css'; 

export default function LoginForm() {
  return (
    <div className={styles.body}>
      <div className="img-container">
        <img src="" alt="" />
      </div>
      <h1>she <span>roams.</span></h1>
      
      <form className="form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn">Login</button>
        <Link className="link" href={"/SignUp"}>
          Don't have an account? <span className="underline">Sign Up</span>
        </Link>
      </form>
    </div>
  );
}
