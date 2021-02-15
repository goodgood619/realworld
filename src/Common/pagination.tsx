import MyMobxTag from '../Article/mobx-article-tag';
import './css/pagination.css';

function Pagination(props : {articleCount : number}) {

    const makeButton: any = () => {
        let data : Array<any> = [];
        const curTag = MyMobxTag.getTag().curTag;
        const curpage = MyMobxTag.getTag().testpage;
        for(let i = 0 ;i < props.articleCount;i++) {
            data.push(
                <li className = "page" key = {i.toString()}>
                    {
                        <a className = {curpage === i ? "cur-page-link":"page-link"} onClick={() => MyMobxTag.setTag({curTag : curTag, testpage : i})}>{i+1}</a>  
                    }
                </li>
            );
        }    
        return data;
    }
        return (
            <nav>
                <ul className = "pagination">
                        {makeButton()}
                </ul>
            </nav>
        );
}

export default Pagination;