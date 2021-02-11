import React,{useState,useEffect} from 'react';
import Banner from "./banner";
import Header from "./header";
import axios from 'axios';
import ProfileArticle from './profileArticle';


function UserProfile() {
    const username = localStorage.getItem('username');
    const [profile, setProfile] = useState<any>({});
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(()=> {

        axios
        .get(`https://conduit.productionready.io/api/profiles/${username}`)
        .then((res:any)=> {
            let profile = res.data.profile;
            setProfile(profile);
            setLoading(false);
            console.log('profile : ',profile);
        });
    },[username,setProfile]);
    
    if(loading === true) {
        return (
            <>
                <h1>데이터가 로딩중입니다...</h1>
            </>
        );
    }
    else {
        return (
            <div>
                <Header image = {true}/>
                <Banner profile={[profile,setProfile]}/>
                <ProfileArticle profile={profile}/>
            </div>
        );
    }
}

export default UserProfile;