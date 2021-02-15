import Header from '../Common/header';
import Home from './home';
import UserArticle from '../Article/userArticle';
import {checkLogin} from '../Common/module';

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