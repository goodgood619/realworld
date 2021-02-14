import Header from "./header";
import { checkLogin } from "./module";
import SettingsForm from "./settingsForm";
import Home from './home';

function Settings(props: { history: any }) {
  const userName = localStorage.getItem('username');
  if (!checkLogin(userName)) {
    alert('현재 로그인 되어있지 않습니다')
    return <Home />;
  }
  else {
    return (
      <div>
        <Header image={false} />
        <SettingsForm history={props.history} />
      </div>
    );
  }
}

export default Settings;