export default function SignupForm (){
    return (
        <div>
            <form>
                
            <input type="email" placeholder="Email"> Email</input>
            <input type="password" placeholder="Paswword">Password</input>
            <input type="password" placeholder="Paswword">Confirm password</input>

            <button className="btn">Sign Up</button>
            <a href="">Already have an acconunt?</a>

            </form>
        </div>
    )
}