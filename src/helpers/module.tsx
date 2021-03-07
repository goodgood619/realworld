
function MakeDate(date : any) {
    return new Date(date).toDateString();
}

function MakeIndex() {
    return Math.random().toString(36).substr(2, 16);
}

function checkLogin(userName : string | null) : boolean {
    if(userName !== null) return true;
    else return false;
}

function MakeContentItem(item : any) {
    const title = JSON.parse(item.title);
    const description = JSON.parse(item.description);
    const author = JSON.parse(item.author);
    const createdAt = JSON.parse(item.createdAt);
    const tagList = JSON.parse(item.tagList);
    const slug = JSON.parse(item.slug);
    const body = JSON.parse(item.body);

    return {title,description,author,createdAt, tagList,slug, body};
}
export {MakeDate,MakeIndex,checkLogin,MakeContentItem};

