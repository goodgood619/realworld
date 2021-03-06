import { useState } from 'react';
import axios from 'axios';
import * as Styled from './styled';


function SettingsForm(props: { history: any }) {
    const [image, setImage] = useState<any>(localStorage.getItem('image'));
    const [nickname, setNickname] = useState<any>(localStorage.getItem('username'));
    const [article, setArticle] = useState<any>(localStorage.getItem('bio'));
    const [id, setId] = useState<any>(localStorage.getItem('email'));
    const [password, setPassword] = useState<any>("");


    const handleLogout = (e: any) => {
        e.preventDefault();
        localStorage.clear();
        props.history.push("/");
    };
    const handleUpdate = () => {
        const data = {
            "user": {
                "email": id,
                "bio": article,
                "image": image,
                "username": nickname,
                "password": password
            }
        };
        axios
            .put(`https://conduit.productionready.io/api/user`, data, {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => {
                alert('업데이트가 완료되었습니다');
                const data = res.data.user;
                localStorage.setItem('email', data.email);
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('bio', data.bio);
                localStorage.setItem('image', data.image);
                setImage(data.image);
                setNickname(data.username);
                setArticle(data.bio);
                setId(data.email);
            })
            .catch((err: any) => {
                alert('원래 비밀번호 혹은 새로운 비밀번호를 입력해주세요, 단 8자리이상입니다.');
                console.log(err);
            })
    };

    return (
        <Styled.SettingContainer>
            <Styled.SettingHeader>Your Settings</Styled.SettingHeader>
            <Styled.SettingSignInForm onSubmit={handleUpdate}>
                <Styled.SettingFieldSet>
                    <Styled.SettingFieldSet>
                        <Styled.SettingInputPost type="text" placeholder="URL of Profile picture" defaultValue={image} onChange={e => setImage(e.target.value)} />
                    </Styled.SettingFieldSet>
                    <Styled.SettingFieldSet>
                        <Styled.SettingInputPost type="text" placeholder="닉네임" defaultValue={nickname} onChange={e => setNickname(e.target.value)} />
                    </Styled.SettingFieldSet>
                    <Styled.SettingFieldSet>
                        <Styled.SettingInputPost className={'Article'} type="text" placeholder="Settings" defaultValue={article} onChange={e => setArticle(e.target.value)} />
                    </Styled.SettingFieldSet>
                    <Styled.SettingFieldSet>
                        <Styled.SettingInputPost type="text" defaultValue={id} onChange={e => setId(e.target.value)} />
                    </Styled.SettingFieldSet>
                    <Styled.SettingFieldSet>
                        <Styled.SettingInputPost type="password" placeholder="New Password" onChange={e => setPassword(e.target.value)} />
                    </Styled.SettingFieldSet>
                    <Styled.SettingSignInButton type="submit">Update Settings</Styled.SettingSignInButton>
                </Styled.SettingFieldSet>
            </Styled.SettingSignInForm>
            <hr />
            <Styled.SettingLogOutButton onClick={handleLogout}>Or click here to logout.</Styled.SettingLogOutButton>
        </Styled.SettingContainer>
    );
}

export default SettingsForm;
