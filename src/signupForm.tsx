import './css/signin.css';
import './css/header.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SignupForm(props : {history : any}) {
    const [username,setUsername] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    const handleSignin = (e:any) => {
        e.preventDefault();
        const data = {
            "user" : {
                "username" : username,
                "email" : email,
                "password" : password
            }
        };

        axios
        .post(`https://conduit.productionready.io/api/users`,data)
        .then((res:any)=>{
            const user = res.data.user;
            localStorage.setItem('username',user.username);
            localStorage.setItem('token',user.token);
            localStorage.setItem('email',user.email);
            localStorage.setItem('bio',user.bio);
            localStorage.setItem('image',user.image);
            props.history.push("/userHome",{
            });
        })
        .catch((err:any)=>{
            const error = err.response;
            if(error.status >=400) {
                alert('username 혹은 email이 중복됩니다. 다시 입력해주세요');
            }
        });
    };

    return (
        <div className="signin">
            <div className="signinHead">
                <h2 className = "signin">Sign Up</h2>
                <Link to = "/signin" className="nav-link">
                    Have an account?
                </Link>
            </div>

            <form className="signinForm" onSubmit = {handleSignin}>
                <fieldset>
                    <fieldset>
                    <input className="post" type="name" placeholder = "Username" onChange = {e=> setUsername(e.target.value)}/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="email" placeholder = "Email" onChange = {e=> setEmail(e.target.value)}/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="password" placeholder = "Password" onChange = {e=> setPassword(e.target.value)} />
                    </fieldset>
                    <button className="signin" type = "submit">Sign up</button>
                </fieldset>
            </form>
        </div>
    );
}

export default SignupForm;