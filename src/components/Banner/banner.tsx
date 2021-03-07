import {Link} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../../constants/constants';
import * as Styled from './styled';


function Banner(props : {profile : [any,any]}) {
    const profileUserName = props.profile[0].username;
    const userName = localStorage.getItem('username');
    const image = props.profile[0].image;
    const following = props.profile[0].following;
    const handleFollow = () => {

        axios
        .post(`${API_URL}/profiles/${profileUserName}/follow`,{},{
            headers : {
                "Authorization" : `Token ${localStorage.getItem('token')}`
            }
        })
        .then((res:any)=>{
            alert('follow가 신청되었습니다.');
            props.profile[1](res.data.profile);
        })
        .catch((err:any)=> {
            console.log(err);
        })
    };

    const handleUnFollow = ()=> {
        axios
        .delete(`${API_URL}/profiles/${profileUserName}/follow`,{
            headers : {
                "Authorization" : `Token ${localStorage.getItem('token')}`
            }
        })
        .then((res:any)=>{
            alert('follow가 해제되었습니다.');
            props.profile[1](res.data.profile);
        })
        .catch((err:any)=>{
            console.log(err);
        });
    };
    if (profileUserName === undefined) {
        return (
            <Styled.BannerContainer>
                <Styled.BannerHomeContainer>
                    <Styled.BannerHeader>conduit</Styled.BannerHeader>
                    <Styled.BannerPItem> A place to share your knowledge.</Styled.BannerPItem>
                </Styled.BannerHomeContainer>
            </Styled.BannerContainer>
        );
    }
    else {
        return (
            <Styled.BannerContainer>
                <Styled.BannerUserContainer>
                    <Styled.BannerProfileContainer>
                        <Styled.BannerImgProfile src={image} />
                        <Styled.BannerSecondHeader>{profileUserName}</Styled.BannerSecondHeader>
                        {
                            userName === profileUserName ? 
                            <Link to = "/settings">
                                <button className="edit_button">Edit Profile Settings</button>
                            </Link>
                             :
                            <Styled.BannerButton className={following === false ? "unfollow" : "follow"} onClick = {following===false ? handleFollow : handleUnFollow}>+ Follow {profileUserName}</Styled.BannerButton>
                        }
                    </Styled.BannerProfileContainer>
                </Styled.BannerUserContainer>
            </Styled.BannerContainer>
        );
    }
}

export default Banner;