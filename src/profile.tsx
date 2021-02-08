import Header from "./header";
import Banner from "./banner";
import Article from "./article";
import { useEffect, useState } from "react";
import axios from "axios";


function Profile(props: {match :any}) {
    const userName = props.match.params.userName;
    console.log('profile userName : ',userName);
    const [username,setUserName] = useState<string>(userName);
    const [profile, setProfile] = useState<any>({});

    useEffect(()=> {

        axios
        .get(`https://conduit.productionready.io/api/profiles/${userName}`)
        .then((res:any)=> {
            let profile = res.data.profile;
            setUserName(userName);
            setProfile(profile);
            console.log('profile : ',profile);
        });
    },[userName]);

    return (
        <div>
            <Header/>
            <Banner profile = {profile}/>
            <Article profile = {profile}/>
        </div>
    );
}

export default Profile;