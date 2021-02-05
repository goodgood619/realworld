import './css/pagination.css';

function Pagination(props : {articleCount : number}) {
    let data : Array<any> = [];
    for(let i = 0 ;i < props.articleCount/10;i++) {
        data.push(
            <li className = "page">
                <a className = "page-link" href = "">{i+1}</a>
            </li>
        );
    }
        return (
            <nav>
                <ul className = "pagination">
                        {data}
                </ul>
            </nav>
        );

}

export default Pagination;