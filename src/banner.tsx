import './css/banner.css'

function Banner() {
    const userCheck = true;
    if (!userCheck) {
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
                        <img src="./image/github.PNG" className = "profile"/>
                        <h4 className="home_banner">userNickname</h4>
                        <button className="banner_button">+ Follow userNickname</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;