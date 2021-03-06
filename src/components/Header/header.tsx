import * as Styled from './styled'

function Header(props : {image : boolean}) {
    const userName = localStorage.getItem('username');
    if (userName === null) {
        return (
            <div>
                <Styled.NavHeader>
                    <Styled.LeftAHeader to ="/">
                        conduit
                    </Styled.LeftAHeader>
                    <Styled.UlHeader>
                        <Styled.NavALink to = "/">
                            Home
                        </Styled.NavALink>
                        <Styled.NavALink to = "/signin">
                            &nbsp;&nbsp;Sign in
                        </Styled.NavALink>
                        <Styled.NavALink to = "/signup">
                            &nbsp;&nbsp;Sign Up
                        </Styled.NavALink>
                    </Styled.UlHeader>
                </Styled.NavHeader>
            </div>
        );
    }
    else {
        return (
            <div>
                <Styled.NavHeader>
                    <Styled.LeftAHeader to = "/">conduit</Styled.LeftAHeader>
                    <Styled.UlHeader>
                        <Styled.NavALink to = "/">
                            Home&nbsp;
                        </Styled.NavALink>
                        <Styled.NavALink to = "/newpost">
                            <Styled.IconHeader src={props.image === false ? "./image/newpost.PNG" : "../image/newpost.PNG"} alt=""/>
                            New Post&nbsp;&nbsp;
                        </Styled.NavALink>
                        <Styled.NavALink to = "/settings" >
                            <Styled.IconHeader src={props.image === false ? "./image/setting.PNG" : "../image/setting.PNG"} alt=""/>
                            Settings 
                        </Styled.NavALink>
                        <Styled.NavALink to = "/userprofile">
                            &nbsp;&nbsp;{userName}
                        </Styled.NavALink>
                    </Styled.UlHeader>
                </Styled.NavHeader>
            </div>
        );
    }
}

export default Header;