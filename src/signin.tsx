import Header from './header';
import Footer from './footer';
import SigninForm from './signinForm';
function Signin(props: {match:any,history:any}) {

    return(
        <>
            <Header />
            <SigninForm match = {props.match} history = {props.history}/>
            <Footer />
        </>
    );
}

export default Signin;