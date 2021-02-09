import Header from "./header";
import SettingsForm from "./settingsForm";

function Settings(props: {history:any}) {

    return(
        <div>
          <Header/>
          <SettingsForm history = {props.history}/>
        </div>
    );
}

export default Settings;