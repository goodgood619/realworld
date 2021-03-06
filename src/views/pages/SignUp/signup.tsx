import Header from '../../../components/Header/header';
import { checkLogin } from '../../../helpers/module';
import UserHome from '../Home/userHome';
import SignupForm from './signupForm';
function Signup(props : {history : any}) {
    const userName = localStorage.getItem('username');
    if(checkLogin(userName)) {
        return <UserHome/>;
    }

    return(
        <>
            <Header image = {false}/>
            <SignupForm history = {props.history}/>
        </>
    );
}

export default Signup;