import Header from './header';
import { checkLogin } from './module';
import NewpostForm from './newpostForm';
import Home from './home';

function NewPost(props : {history : any, location : any}) {
    const state = props.location.state;
    console.log(state);
    const userName = localStorage.getItem('username');
    if(!checkLogin(userName)) {
        alert('로그인 되어 있지 않습니다.');
        return <Home />;
    }
    else {
        if(state !== undefined) {
            return (
                <div>
                    <Header image = {false}/>
                    <NewpostForm history = {props.history} title = {state.title} body = {state.body}
                    description = {state.description} tagList = {state.tagList} edit = {true} slug = {state.slug}/>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Header image = {false}/>
                    <NewpostForm history = {props.history} title = {""} body = {""}
                    description = {""} tagList = {[]} edit = {false} slug = {""}/>
                </div>
            );
        }
    }
}

export default NewPost;