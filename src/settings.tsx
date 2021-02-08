import Header from "./header";
import Footer from "./footer";
import SettingsForm from "./settingsForm";

function Settings(props: {history:any}) {

    return(
        <div>
          <Header/>
          <SettingsForm history = {props.history}/>
          <Footer/>
        </div>
    );
}

export default Settings;