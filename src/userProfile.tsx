import React,{useState,useEffect} from 'react';
import Article from "./article";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import axios from 'axios';


function UserProfile() {
    const username = localStorage.getItem('username');
    const [profile, setProfile] = useState<any>({});

    useEffect(()=> {

        axios
        .get(`https://conduit.productionready.io/api/profiles/${username}`)
        .then((res:any)=> {
            let profile = res.data.profile;
            setProfile(profile);
            console.log('profile : ',profile);
        });
    },[username]);

    return (
        <div>
            <Header />
            <Banner profile={profile}/>
            <Article profile={profile}/>
            <Footer/>
        </div>
    );
}

export default UserProfile;