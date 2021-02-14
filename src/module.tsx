
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
export {MakeDate,MakeIndex,checkLogin};

