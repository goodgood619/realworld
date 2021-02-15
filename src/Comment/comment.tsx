import { useState } from "react";
import CommentBanner from "./commentBanner";
import CommentDescription from "./commentDescription";
import Header from "../Common/header";

function Comment(props: { match: any, history: any, location: any }) {
    const state = props.location.state;
    const [stateValue, setStateValue] = useState<any>(state);

    return (
        <>
            <Header image = {false}/>
            <CommentBanner title={stateValue.title} body={state.body} author  = {state.author} createdAt={state.createdAt}
            description = {state.description} tagList = {state.tagList} history = {props.history} slug = {state.slug}/>
            <CommentDescription description={state.description} tagList={state.tagList}
            slug = {state.slug}/>
        </>
    );
}

export default Comment;