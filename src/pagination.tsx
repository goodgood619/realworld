import './css/pagination.css';

function Pagination(props : {curPage : [number,any],articleCount : number}) {

    const makeButton: any = () => {
        let data : Array<any> = [];
        const [curpage, setCurPage] = props.curPage;
        for(let i = 0 ;i < props.articleCount;i++) {
            data.push(
                <li className = "page">
                    {
                        <a className = {curpage ===i ? "cur-page-link":"page-link"} onClick={() => setCurPage(i)}>{i+1}</a>  
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