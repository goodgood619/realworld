import Header from './header';
import SigninForm from './signinForm';
function Signin(props: {match:any,history:any}) {

    return(
        <>
            <Header />
            <SigninForm match = {props.match} history = {props.history}/>
        </>
    );
}

export default Signin;