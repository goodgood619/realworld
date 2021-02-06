import './css/settingsForm.css';

function SettingsForm() {
    return (
        <div className = "newpost">
                <h1 className = "setting">Your Settings</h1>
                <form className="signinForm">
                <fieldset>
                    <fieldset>
                        <input className="post" type="text" placeholder = "URL of Profile picture"/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="text" placeholder = "닉네임"/>
                    </fieldset>
                    <fieldset>
                    <input className="post_article" type="text" placeholder = "Settings "/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="text" value = "ID"/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="password" placeholder = "New Password"/>
                    </fieldset>
                    <button className="signin">Update Settings</button>
                </fieldset>
            </form>
            <hr/>
            <button className = "logout">Or click here to logout.</button>
        </div>
    );
}

export default SettingsForm;
