import { Fragment } from 'react';
import './css/taglist.css';
import {observer} from 'mobx-react-lite';
import MyMobxTag from './mobx-article-tag';


const TagList = observer((props: { tagList: Array<any>, profile: any})=> {
    const profileUsername = props.profile.username;
    if (profileUsername === undefined) {
        return (
            <div className="body_data_right">
                <div className="body_data_right_box">
                    <div className="body_data_right_popular">
                        <p>Popular Tags</p>
                    </div>
                    <div>
                        {props.tagList.map((item: any) => (
                                <a className="body_data_right_tags" onClick={() => { MyMobxTag.setCurTag(item);  }} >{item}</a>
                        ))}
                    </div>
                </div>
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