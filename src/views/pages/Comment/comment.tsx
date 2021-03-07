import { useState } from "react";
import CommentBanner from "../../../components/CommentBanner/commentBanner";
import CommentDescription from "../../../components/CommentDescription/commentDescription";
import Header from "../../../components/Header/header";
import {MakeContentItem} from '../../../helpers/module';

function Comment(props: { match: any, history: any, location: any }) {

    

    const state = MakeContentItem(props.location.state);
    return (
        <>
            <Header image={false} />
            <CommentBanner title={state.title} body={state.body} author={state.author} 
            createdAt={state.createdAt}
                description={state.description} 
                tagList={state.tagList} history={props.history} slug={state.slug} img={state.img}/>
            <CommentDescription description={state.description} tagList={state.tagList}
                slug={(state.slug)} img={state.img}/>
        </>
    );
}

export default Comment;