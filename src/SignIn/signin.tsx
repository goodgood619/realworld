import Header from '../Common/header';
import SigninForm from './signinForm';
function Signin(props: {match:any,history:any}) {

    return(
        <>
            <Header image = {false}/>
            <SigninForm match = {props.match} history = {props.history}/>
        </>
    );
}

export default Signin;