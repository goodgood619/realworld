import './css/header.css';
import {Link} from 'react-router-dom';


function Header() {
    const userCheck = false;
    if (!userCheck) {
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
                        <Link to = "/signin" className="nav_link">
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
                        <Link to = "/signin" className="nav_link">
                            <img src="./image/newpost.PNG" className = "header_icon"/>
                            New Post&nbsp;&nbsp;
                        </Link>
                        <Link to = "/signup" className = "nav_link">
                            <img src="./image/setting.PNG" className = "header_icon" />
                            Settings 
                        </Link>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;