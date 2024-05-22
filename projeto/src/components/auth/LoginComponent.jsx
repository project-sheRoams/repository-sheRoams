import Link from "next/Link";

export default function LoginForm (){
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <form className="flex"> 
            <inpu type="email" placeholder="Email"> Email</inpu>
            <inpu type="password" placeholder="Paswword">Password</inpu>
            <button className="btn"></button>
            <Link href="/"> 
            Don't have an account? <span className="underline">
            Sign Up </span> 
            </Link>
            </form>
        </div>
    )
}