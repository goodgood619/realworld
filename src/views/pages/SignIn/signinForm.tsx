import axios from 'axios';
import { observer, useLocalObservable } from 'mobx-react-lite';
import * as Styled from './styled';
import * as HeaderStyled from '../../../components/Header/styled';

const SigninForm = observer((props: { match: any, history: any }) => {
    const signin = useLocalObservable(() => ({
        id: "",
        password: "",
        setId(e: any) {
            signin.id = e.target.value;
        },
        getId() {
            return signin.id;
        },
        setPassword(e: any) {
            signin.password = e.target.value;
        },
        getPassword() {
            return signin.password;
        }
    }));


    const handleSignin = (e: any) => {
        e.preventDefault();
        const data = {
            "user": {
                "email": signin.getId(),
                "password": signin.getPassword()
            }
        };
        axios
            .post('https://conduit.productionready.io/api/users/login', data)
            .then((res: any) => {
                const data = res.data.user;
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('email', data.email);
                localStorage.setItem('bio', data.bio);
                localStorage.setItem('image', data.image);
                props.history.push("/userHome");
            })
            .catch((err: any) => {
                const error = err.response;
                if (error.status >= 400) {
                    alert('아이디나 비밀번호가 틀렸습니다. 다시 입력해주세요');
                }
            })


    };

    return (
        <Styled.SignInContainer>
            <Styled.SignInHeadContainer>
                <Styled.SignInHeader>Sign In</Styled.SignInHeader>
                <HeaderStyled.NavALink to="/signup">
                    Need an account?
                </HeaderStyled.NavALink>
            </Styled.SignInHeadContainer>


            <Styled.SignInForm onSubmit={handleSignin}>
                <Styled.SignInFieldSet>
                    <Styled.SignInFieldSet>
                        <Styled.SignInInput type="email" placeholder="Email" onChange={e => signin.setId(e)} />
                    </Styled.SignInFieldSet>
                    <Styled.SignInFieldSet>
                        <Styled.SignInInput type="password" placeholder="Password" onChange={e => signin.setPassword(e)} />
                    </Styled.SignInFieldSet>
                    <Styled.SignInButton type="submit">Sign in</Styled.SignInButton>
                </Styled.SignInFieldSet>
            </Styled.SignInForm>
        </Styled.SignInContainer>
    );
});

export default SigninForm;