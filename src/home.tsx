import Header from './header';
import Banner from './banner';
import Article from './article';
import UserHome from './userHome';

function Home() {
    const userName = localStorage.getItem('username');
    console.log(userName);
    if(userName === null) {
        return (
            <>
                <Header />
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