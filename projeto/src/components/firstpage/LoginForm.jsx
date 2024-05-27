import React, { useState } from 'react';
import styles from '../../styles/Login.module.css';
import SignUp from "./SignupForm"
import { useRouter } from "next/router"

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSignup, setShowSignup] = useState(false); 
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    // Aqui você faria a requisição para o backend de login
    // const res = await fetch("/api/login", { method: "POST", ... });

    // Aqui você processaria a resposta do backend e lidaria com os erros

    // Exemplo de como lidar com erros
    // if (!res.ok) {
    //   const data = await res.json();
    //   setError(data.message);
    //   return;
    // }

    // Se o login for bem-sucedido, você pode redirecionar o usuário
    // ou fazer qualquer outra ação necessária

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password}),
      })

      const data = await res.json();

      if (res.ok) {
        console.log("Login successful")
        router.push("/home")
      } else {
        setError(data.message || "An error occurred. PLease try again.")
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const handleSignupClick = () => {
    // Aqui você pode adicionar a lógica para lidar com o clique em "Sign up"
    setShowSignup(true); // Define showSignup como true para exibir o componente de signup
  };

  return (
    <div className={styles.loginCard}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h1 className={styles.text}>
        Login to your account
        </h1>
        <input
          className={styles.formInput}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.formInput}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.loginSubmitButton} type="submit">Login</button>
        {error && <p className={styles.error}>{error}</p>}
        <p className={styles.loginToggle}>
          Don't have an account? <span onClick={handleSignupClick} className={styles.toggleLink}>Sign up</span>
        </p>
      </form>
      {showSignup && <SignUp />}
    </div>
  );
}

export default LoginForm;
