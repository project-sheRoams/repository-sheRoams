export default function SignupForm (){
    return (
        <div>
            <form>
            <inpu type="email" placeholder="Email"> Email</inpu>
            <inpu type="password" placeholder="Paswword">Password</inpu>
            <inpu type="password" placeholder="Paswword">Confirm password</inpu>

            <button className="btn">Sign Up</button>
            <a href="">Already have an acconunt?</a>
            </form>
        </div>
    )
}