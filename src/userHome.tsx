import Header from './header';
import Home from './home';
import UserArticle from './userArticle';
import {checkLogin} from './module';

function UserHome() {
    const userName = localStorage.getItem('username');
    if(!checkLogin(userName)) {
        return <Home/>;
    }
    else {
        return (
            <>
                <Header image = {false}/>
                <UserArticle profile ={""}/>
            </>
        );
    }
}

export default UserHome;