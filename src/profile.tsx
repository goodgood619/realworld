import Header from "./header";
import Banner from "./banner";
import Article from "./article";
import { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "./userProfile";


function Profile(props: {match :any}) {
    const profileuserName = props.match.params.userName;
    console.log('profile userName : ',profileuserName);
    const userName = localStorage.getItem('username');
    const [profile, setProfile] = useState<any>({});

    useEffect(()=> {

        axios
        .get(`https://conduit.productionready.io/api/profiles/${profileuserName}`)
        .then((res:any)=> {
            let profile = res.data.profile;
            setProfile(profile);
            console.log('profile : ',profile);
        });
    },[profileuserName,setProfile]);

    if(userName !== profileuserName) {
        return (
            <div>
                <Header/>
                <Banner profile = {[profile,setProfile]}/>
                <Article profile = {profile}/>
            </div>
        );
    }
    else {
        return <UserProfile/>;
    }
}

export default Profile;