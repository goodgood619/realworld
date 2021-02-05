import './css/taglist.css';

function TagList(props: {tagList:Array<any>}) {
    return (
        <div className="body_data_right">
            <div className="body_data_right_box">
                <div className="body_data_right_popular">
                    <p>Popular Tags</p>
                </div>
                <div>
                    {props.tagList.map((item)=>(
                        <a className = "body_data_right_tags">{item}</a>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default TagList;