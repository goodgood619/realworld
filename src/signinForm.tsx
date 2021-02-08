import './css/signin.css';
import './css/header.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SigninForm(props: {match:any,history:any}) {
    const [id,setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSignin = (e : any)=> {
        e.preventDefault(); 
        console.log(id);
        console.log(password);
        const data = {
            "user": {
            "email" : id, 
            "password" : password}
        };
        console.log(JSON.stringify(data));
        axios
        .post('https://conduit.productionready.io/api/users/login',data)
        .then((res:any)=>{
            const data = res.data.user;
            localStorage.setItem('token',data.token);
            localStorage.setItem('username',data.username);
            props.history.push("/userHome");
        })
        .catch((err: any)=>{
            console.log(err);
        })


    };

    return (
        <div className="signin">
            <div className="signinHead">
                <h2 className = "signin">Sign In</h2>
                <Link to = "/signup" className="nav-link">
                    Need an account?
                </Link>
            </div>

            <form className="signinForm" onSubmit = {handleSignin}>
                <fieldset>
                    <fieldset>
                    <input className="post" type="email" placeholder = "Email" onChange = {e=> setId(e.target.value)}/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="password" placeholder = "Password"onChange = {e=> setPassword(e.target.value)}/>
                    </fieldset>
                    <button className="signin" type = "submit">Sign in</button>
                </fieldset>
            </form>
        </div>
    );
}

export default SigninForm;