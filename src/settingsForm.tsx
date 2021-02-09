import { useState } from 'react';
import './css/settingsForm.css';
import axios from 'axios';

function SettingsForm(props: { history: any }) {
    const [image, setImage] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [article,setArticle] = useState<string>("");
    const [id,setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    
    const handleLogout = (e: any) => {
        e.preventDefault();
        localStorage.clear();
        props.history.push("/");
    };
    const handleUpdate = () => {
        const data = {
            "email" : id,
            "bio" : article,
            "image" : image,
            "username" : nickname,
            "password" : password
        };
        axios
            .put(`https://conduit.productionready.io/api/user`,data,{
                headers : {
                    "Authorization" : `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => {
                console.log(res);
            })
    };

    return (
        <div className="setting">
            <h1 className="setting">Your Settings</h1>
            <form className="signinForm" onSubmit={handleUpdate}>
                <fieldset>
                    <fieldset>
                        <input className="post" type="text" placeholder="URL of Profile picture" onChange={e => setImage(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <input className="post" type="text" placeholder="닉네임" onChange={e => setNickname(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <input className="post_article" type="text" placeholder="Settings" onChange={e =>setArticle(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <input className="post" type="text" onChange = {e=> setId(e.target.value)}/>
                    </fieldset>
                    <fieldset>
                        <input className="post" type="password" placeholder="New Password" onChange = {e=>setPassword(e.target.value)}/>
                    </fieldset>
                    <button className="signin" type="submit">Update Settings</button>
                </fieldset>
            </form>
            <hr />
            <button className="logout" onClick={handleLogout}>Or click here to logout.</button>
        </div>
    );
}

export default SettingsForm;
