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
        const data = {
            "user" : {
                "email" : id, 
                "password" : password
            }
        };
        axios
        .post('https://conduit.productionready.io/api/users/login',data)
        .then((res:any)=>{
            const data = res.data.user;
            localStorage.setItem('token',data.token);
            localStorage.setItem('username',data.username);
            localStorage.setItem('email',data.email);
            localStorage.setItem('bio',data.bio);
            localStorage.setItem('image',data.image);
            props.history.push("/userHome",{
                email : data.email,
                username : data.username,
                bio : data.bio,
                image : data.image
            });
        })
        .catch((err: any)=>{
            const error = err.response;
            if(error.status >= 400) {
                alert('아이디나 비밀번호가 틀렸습니다. 다시 입력해주세요');
            }
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
                    <input className="post" type="password" placeholder = "Password" onChange = {e=> setPassword(e.target.value)}/>
                    </fieldset>
                    <button className="signin" type = "submit">Sign in</button>
                </fieldset>
            </form>
        </div>
    );
}

export default SigninForm;