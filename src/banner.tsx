import './css/banner.css'

function Banner(props : {profile : any}) {
    const userCheck = false;
    const userName = props.profile.username;
    const image = props.profile.image;
    if (userName === undefined) {
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
                        <h4 className="home_banner">{userName}</h4>
                        <button className="banner_button">+ Follow {userName}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;