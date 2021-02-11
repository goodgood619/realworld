
function MakeDate(date : any) {
    return new Date(date).toDateString();
}

function MakeIndex() {
    return Math.random().toString(36).substr(2, 16);
}

export {MakeDate,MakeIndex};

