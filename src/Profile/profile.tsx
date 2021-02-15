import Header from "../Common/header";
import Banner from "../Common/banner";
import { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "./userProfile";
import ProfileArticle from "../Article/profileArticle";


function Profile(props: { match: any }) {
    const profileuserName = props.match.params.userName;
    console.log('profile userName : ', profileuserName);
    const userName = localStorage.getItem('username');
    const [profile, setProfile] = useState<any>({});
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {

        axios
            .get(`https://conduit.productionready.io/api/profiles/${profileuserName}`)
            .then((res: any) => {
                let profile = res.data.profile;
                setProfile(profile);
                setLoading(false);
            });
    }, [profileuserName, setProfile]);

    if (loading === true) {
        return (
            <>
                <h1>데이터가 로딩중입니다...</h1>
            </>
        );
    }
    else {
        if (userName !== profileuserName) {
            return (
                <div>
                    <Header image = {true}/>
                    <Banner profile={[profile, setProfile]} />
                    <ProfileArticle profile={profile} />
                </div>
            );
        }
        else {
            return <UserProfile />;
        }
    }
}

export default Profile;