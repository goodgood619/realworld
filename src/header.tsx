import './css/header.css';
import {Link} from 'react-router-dom';


function Header() {
    const userName = localStorage.getItem('username');
    if (userName === null) {
        return (

            <div>
                <nav className="nav_header">
                    <a className="left_header">conduit</a>
                    <ul className="ul_head">
                        <Link to = "/" className = "nav_link">
                            Home
                        </Link>
                        <Link to = "/signin" className="nav_link">
                            &nbsp;&nbsp;Sign in
                        </Link>
                        <Link to = "/signup" className="nav_link">
                            &nbsp;&nbsp;Sign Up
                        </Link>
                    </ul>
                </nav>
            </div>
        );
    }
    else {
        return (
            <div>
                <nav className="nav_header">
                    <a className="left_header" href="index.html">conduit</a>
                    <ul className="ul_head">
                        <Link to = "/" className="nav_link">
                            Home&nbsp;
                        </Link>
                        <Link to = "/newpost" className="nav_link">
                            <img src="./image/newpost.PNG" className = "header_icon"/>
                            New Post&nbsp;&nbsp;
                        </Link>
                        <Link to = "/settings" className = "nav_link">
                            <img src="./image/setting.PNG" className = "header_icon" />
                            Settings 
                        </Link>
                        <Link to = "/userprofile" className="nav_link">
                            &nbsp;&nbsp;{userName}
                        </Link>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;