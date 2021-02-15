import '../css/signForm.css';
import '../Common/css/header.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {observer,useLocalObservable} from 'mobx-react-lite';


const SigninForm = observer((props: {match:any,history:any})=> {
    const signin = useLocalObservable(() =>({
        id : "",
        password : "",
        setId(e:any) {
            signin.id = e.target.value;
        },
        getId() {
            return signin.id;
        },
        setPassword(e:any) {
            signin.password = e.target.value;
        },
        getPassword() {
            return signin.password;
        }
    }));


    const handleSignin = (e : any)=> {
        e.preventDefault(); 
        const data = {
            "user" : {
                "email" : signin.getId(), 
                "password" : signin.getPassword()
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
            props.history.push("/userHome");
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
                    <input className="post" type="email" placeholder = "Email" onChange = {e=> signin.setId(e)}/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="password" placeholder = "Password" onChange = {e=> signin.setPassword(e)}/>
                    </fieldset>
                    <button className="signin" type = "submit">Sign in</button>
                </fieldset>
            </form>
        </div>
    );
});

export default SigninForm;