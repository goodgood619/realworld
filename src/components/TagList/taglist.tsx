import { Fragment } from 'react';
import {observer} from 'mobx-react-lite';
import MyMobxTag from '../../stores/Article/mobx-article-tag';
import * as Styled from './styled';

const TagList = observer((props: { tagList: Array<any>, profile: any})=> {
    const profileUsername = props.profile.username;
    if (profileUsername === undefined) {
        return (
            <div className="body_data_right">
                <Styled.TagListInnerContainer>
                    <Styled.TagListContainer>
                        <p>Popular Tags</p>
                    </Styled.TagListContainer>
                    <div>
                        {props.tagList.map((item: any) => (
                                <Styled.TagListAItem onClick={() => { 
                                    if(item !== MyMobxTag.getTag().curTag) {
                                        MyMobxTag.setTag({curTag : item,testpage : 0})
                                    }
                                  }} >{item}</Styled.TagListAItem>
                        ))}
                    </div>
                </Styled.TagListInnerContainer>
            </div>
        );
    }
    else {
        return (
            <>
            </>
        );
    }
});

export default TagList;