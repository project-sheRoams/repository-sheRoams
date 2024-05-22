"use client"

import Link from "next/link";
import { useState } from "react";

export default function SignupForm() {

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [confirmPass, setConfirmPass] = useState("");
// const [error, setError] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || confirmPass) {
//       setError("All fields are necessary.");
//       return;
//     }


  return (
    <div>
      <form>
        <h2>Register</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="btn">Register</button>

        <Link href={"/Login"}>
          Already have an account? <span 
          className="underline">Login</span>
        </Link>
      </form>
    </div>
  );
}
