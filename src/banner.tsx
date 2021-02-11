import './css/banner.css'
import {Link} from 'react-router-dom';
import axios from 'axios';


function Banner(props : {profile : [any,any]}) {
    const profileUserName = props.profile[0].username;
    const userName = localStorage.getItem('username');
    const image = props.profile[0].image;
    const following = props.profile[0].following;
    const handleFollow = () => {

        axios
        .post(`https://conduit.productionready.io/api/profiles/${profileUserName}/follow`,{},{
            headers : {
                "Authorization" : `Token ${localStorage.getItem('token')}`
            }
        })
        .then((res:any)=>{
            props.profile[1](res.data.profile);
        })
        .catch((err:any)=> {
            console.log(err);
        })
    };

    const handleUnFollow = ()=> {
        axios
        .delete(`https://conduit.productionready.io/api/profiles/${profileUserName}/follow`,{
            headers : {
                "Authorization" : `Token ${localStorage.getItem('token')}`
            }
        })
        .then((res:any)=>{
            props.profile[1](res.data.profile);
        })
        .catch((err:any)=>{
            console.log(err);
        });
    };
    if (profileUserName === undefined) {
        return (
            <div id="banner">
                <div className="home_banner">
                    <h3 className="home_banner">conduit</h3>
                    <p className="home_banner"> A place to share your knowledge.</p>
                </div>
            </div>
        );
    }
    else {
        return (
            <div id="banner">
                <div className="user_banner">
                    <div className="profile_banner">
                        <img src={image} className = "profile"/>
                        <h4 className="home_banner">{profileUserName}</h4>
                        {
                            userName === profileUserName ? 
                            <Link to = "/settings">
                                <button className="edit_button">Edit Profile Settings</button>
                            </Link>
                             :
                            <button className={following === false ? "unfollow" : "follow"} onClick = {following===false ? handleFollow : handleUnFollow}>+ Follow {profileUserName}</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;