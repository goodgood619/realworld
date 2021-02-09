import Header from './header';
import NewpostForm from './newpostForm';
import Signin from './signin';

function NewPost(props : {history : any, location : any}) {
    const userName = localStorage.getItem('username');
    const state = props.location.state;
    console.log(state);
    if(state !== undefined) {
        return (
            <div>
                <Header />
                <NewpostForm history = {props.history} title = {state.title} body = {state.body}
                description = {state.description} tagList = {state.tagList} edit = {true} slug = {state.slug}/>
            </div>
        );
    }
    else {
        return (
            <div>
                <Header />
                <NewpostForm history = {props.history} title = {""} body = {""}
                description = {""} tagList = {[]} edit = {false} slug = {state.slug}/>
            </div>
        );
    }
}

export default NewPost;