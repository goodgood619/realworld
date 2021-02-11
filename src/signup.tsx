import Header from './header';
import SignupForm from './signupForm';
function Signup(props : {history : any}) {

    return(
        <>
            <Header image = {false}/>
            <SignupForm history = {props.history}/>
        </>
    );
}

export default Signup;