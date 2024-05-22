import Link from "next/link";

export default function SignupForm() {
  return (
    <div>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="btn">Sign Up</button>
        <Link href="/login">Already have an account?</Link>
      </form>
    </div>
  );
}
