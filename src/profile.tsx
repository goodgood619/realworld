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
    const [articleArray,setArticleArray] = useState<Array<any>>([]);

    useEffect(()=> {

        axios
        .get(`https://conduit.productionready.io/api/profiles/${username}`)
        .then((res:any)=> {
            let profile = res.data.profile;
            setUserName(username);
            setProfile(profile);
            console.log('profile : ',profile);
        });
    },[username]);

    return (
        <div>
            <Header/>
            <Banner profile = {profile}/>
            <Article profile = {profile}/>
        </div>
    );
}

export default Profile;