import { useState } from 'react';
import axios from 'axios';
import * as Styled from './styled';
import * as HeaderStyled from '../../../components/Header/styled';

function SignupForm(props: { history: any }) {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSignUp = (e: any) => {
        e.preventDefault();
        const data = {
            "user": {
                "username": username,
                "email": email,
                "password": password
            }
        };

        axios
            .post(`https://conduit.productionready.io/api/users`, data)
            .then((res: any) => {
                const user = res.data.user;
                localStorage.setItem('username', user.username);
                localStorage.setItem('token', user.token);
                localStorage.setItem('email', user.email);
                localStorage.setItem('bio', user.bio);
                localStorage.setItem('image', user.image);
                props.history.push("/userHome", {
                });
            })
            .catch((err: any) => {
                const error = err.response;
                if (error.status >= 400) {
                    alert('username 혹은 email이 중복됩니다. 다시 입력해주세요');
                }
            });
    };

    return (
        <Styled.SignUpContainer>
            <Styled.SignUpHeadContainer>
                <Styled.SignUpHeader>Sign Up</Styled.SignUpHeader>
                <HeaderStyled.NavALink to="/signin">
                    Have an account?
                </HeaderStyled.NavALink>
            </Styled.SignUpHeadContainer>

            <Styled.SignUpForm onSubmit={handleSignUp}>
                <Styled.SignUpFieldSet>
                    <Styled.SignUpFieldSet>
                        <Styled.SignUpInput type="name" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    </Styled.SignUpFieldSet>
                    <Styled.SignUpFieldSet>
                        <Styled.SignUpInput type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    </Styled.SignUpFieldSet>
                    <Styled.SignUpFieldSet>
                        <Styled.SignUpInput type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </Styled.SignUpFieldSet>
                    <Styled.SignUpButton>Sign up</Styled.SignUpButton>
                </Styled.SignUpFieldSet>
            </Styled.SignUpForm>
        </Styled.SignUpContainer>
    );
}

export default SignupForm;