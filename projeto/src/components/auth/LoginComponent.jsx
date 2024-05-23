// import Link from "next/link";
// import styles from './Login.module.css';

// export default function LoginForm() {
//   return (
//     <div className={styles.body}>
//       <div className="img-container">
//         <img src="" alt="" />
//       </div>
//       <h1>she <span>roams.</span></h1>

//       <form className="form">
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <button className="btn">Login</button>
//         <Link className="link" href={"/SignUp"}>
//           Don't have an account? <span className="underline">Sign Up</span>
//         </Link>
//       </form>
//     </div>
//   );
// }

import Link from "next/link";
import styles from "./Login.module.css";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      // Redirect to dashboard or another page
      console.log("Login successful");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles["img-container"]}>
        <img src="" alt="" />
      </div>
      <h1 className={styles.h1}>
        she <span className={styles.title}>roams.</span>
      </h1>

      <form className={styles.form} onSubmit={handleLogin}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          Login
        </button>
        {error && <p className={styles.error}>{error}</p>}
        <Link className={styles.link} href="/SignUp">
          Don't have an account?{" "}
          <span className={styles.underline}>Sign Up</span>
        </Link>
      </form>
    </div>
  );
}
