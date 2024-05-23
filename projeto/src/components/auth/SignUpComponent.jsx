// "use client"

// import Link from "next/link";
// import { useState } from "react";

// export default function SignupForm() {

// // const [name, setName] = useState("");
// // const [email, setEmail] = useState("");
// // const [password, setPassword] = useState("");
// // const [confirmPass, setConfirmPass] = useState("");
// // const [error, setError] = useState("");

// //   const router = useRouter();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!name || !email || !password || confirmPass) {
// //       setError("All fields are necessary.");
// //       return;
// //     }


//   return (
//     <div>
//       <form>
//         <h2>Register</h2>

//         <input type="text" placeholder="Full Name" />
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <input type="password" placeholder="Confirm Password" />
//         <button className="btn">Register</button>

//         <Link href={"/login"}>
//           Already have an account? <span 
//           className="underline">Login</span>
//         </Link>
//       </form>
//     </div>
//   );
// }
import Link from "next/link";
import { useState } from "react";
import styles from "./signup.module.css"; 

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPass) {
      setError("All fields are necessary.");
      return;
    }

    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    // Send data to backend API
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Sign up failed.");
      }

      // Handle successful sign up, e.g., redirect to login page
      // router.push("/login");
    } catch (error) {
      setError("Sign up failed. Please try again later.");
    }
  };

  return (
    <div className={styles.form}> {/* Aplicando a classe CSS */}
      <h2 className={styles.h1}>Register</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
      />
      <button type="submit" className={styles.btn} onClick={handleSubmit}> {/* Aplicando a classe CSS */}
        Register
      </button>

      <p style={{ color: "red" }}>{error}</p>

      <Link href="/login">
        Already have an account? <span className={styles.underline}>Login</span> {/* Aplicando a classe CSS */}
      </Link>
    </div>
  );
}

