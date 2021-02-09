import React,{useState,useEffect} from 'react';
import Article from "./article";
import Banner from "./banner";
import Header from "./header";
import axios from 'axios';


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
                데이터가 로딩중입니다...
            </>
        );
    }
    else {
        return (
            <div>
                <Header />
                <Banner profile={[profile,setProfile]}/>
                <Article profile={profile}/>
            </div>
        );
    }
}

export default UserProfile;