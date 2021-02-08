import './css/banner.css'
import {Link} from 'react-router-dom';


function Banner(props : {profile : any}) {
    const profileUserName = props.profile.username;
    const userName = localStorage.getItem('username');
    const image = props.profile.image;
    if (profileUserName === undefined) {
        return (
            <div id="banner">
                <div className="home_banner">
                    <h3 className="home_banner">conduit</h3>
                    <p className="home_banner"> A place to share your knowledge.</p>
                </div>
            </div>
        );
    }
    else {
        return (
            <div id="banner">
                <div className="user_banner">
                    <div className="profile_banner">
                        <img src={image} className = "profile"/>
                        <h4 className="home_banner">{profileUserName}</h4>
                        {
                            userName === profileUserName ? 
                            <Link to = "/settings">
                                <button className="banner_button">Edit Profile Settings</button>
                            </Link>
                             :
                            <button className="banner_button">+ Follow {profileUserName}</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;