import './css/signin.css';
import './css/header.css';
import {Link} from 'react-router-dom';

function SignupForm() {
    return (
        <div className="signin">
            <div className="signinHead">
                <h2 className = "signin">Sign Up</h2>
                <Link to = "/signin" className="nav-link">
                    Have an account?
                </Link>
            </div>

            <form className="signinForm">
                <fieldset>
                    <fieldset>
                    <input className="post" type="name" placeholder = "Username"/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="email" placeholder = "Email"/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="password" placeholder = "Password"/>
                    </fieldset>
                    <button className="signin">Sign up</button>
                </fieldset>
            </form>
        </div>
    );
}

export default SignupForm;