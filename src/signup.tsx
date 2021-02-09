import Header from './header';
import SignupForm from './signupForm';
function Signup(props : {history : any}) {

    return(
        <>
            <Header />
            <SignupForm history = {props.history}/>
        </>
    );
}

export default Signup;