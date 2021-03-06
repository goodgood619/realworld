import Header from '../../../components/Header/header';
import { checkLogin } from '../../../helpers/module';
import UserHome from '../Home/userHome';
import SigninForm from './signinForm';
function Signin(props: {match:any,history:any}) {
    const userName = localStorage.getItem('username');
    if(checkLogin(userName)) {
        return <UserHome/>;
    }
    return(
        <>
            <Header image = {false}/>
            <SigninForm match = {props.match} history = {props.history}/>
        </>
    );
}

export default Signin;