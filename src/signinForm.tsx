import './css/signin.css';
import './css/header.css';
import {Link} from 'react-router-dom';

function SigninForm() {

    return (
        <div className="signin">
            <div className="signinHead">
                <h2 className = "signin">Sign In</h2>
                <Link to = "/signup" className="nav-link">
                    Need an account?
                </Link>
            </div>

            <form className="signinForm">
                <fieldset>
                    <fieldset>
                    <input className="signinInput" type="email" placeholder = "Email"/>
                    </fieldset>
                    <input className="signinInput" type="password" placeholder = "Password"/>
                    <button className="signin">Sign in</button>
                </fieldset>
            </form>
        </div>
    );
}

export default SigninForm;