import Header from '../../../components/Header/header';
import Home from './home';
import UserArticle from '../Article/userArticle';
import {checkLogin} from '../../../helpers/module';
import MyMobxTag from '../../../stores/Article/mobx-article-tag';

function UserHome() {
    const userName = localStorage.getItem('username');
    if(!checkLogin(userName)) {
        return <Home/>;
    }
    else {
        MyMobxTag.setTag({curTag : "",testpage : 0});
        return (
            <>
                <Header image = {false}/>
                <UserArticle profile ={""}/>
            </>
        );
    }
}

export default UserHome;