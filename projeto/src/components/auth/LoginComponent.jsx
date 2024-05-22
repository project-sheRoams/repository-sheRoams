import Link from "next/link";

export default function LoginForm() {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn">Login</button>
        <Link className="link" href={"/"}>
          Don't have an account? <span className="underline">Sign Up</span>
        </Link>
      </form>
    </div>
  );
}
