import Header from '../../../components/Header/header';
import Banner from '../../../components/Banner/banner';
import Article from '../Article/article';
import UserHome from './userHome';

function Home() {
    const userName = localStorage.getItem('username');
    if(userName === null) {
        return (
            <>
                <Header image = {false}/>
                <Banner profile = {["",""]}/>
                <Article profile ={""}/>
            </>
        );
    }
    else {
        return <UserHome />;
    }

}

export default Home;