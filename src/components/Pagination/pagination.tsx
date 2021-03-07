import MyMobxTag from '../../stores/Article/mobx-article-tag';
import * as Styled from './styled';

function Pagination(props : {articleCount : number}) {

    const makeButton: any = () => {
        let data : Array<any> = [];
        const curTag = MyMobxTag.getTag().curTag;
        const curpage = MyMobxTag.getTag().testpage;
        for(let i = 0 ;i < props.articleCount;i++) {
            data.push(
                <Styled.PageLi key = {i.toString()}>
                    {
                        <Styled.PageLink className = {curpage === i ? "cur-page-link":""} onClick={() => MyMobxTag.setTag({curTag : curTag, testpage : i})}>{i+1}</Styled.PageLink>  
                    }
                </Styled.PageLi>
            );
        }    
        return data;
    }
        return (
            <nav>
                <Styled.PageUl>
                        {makeButton()}
                </Styled.PageUl>
            </nav>
        );
}

export default Pagination;