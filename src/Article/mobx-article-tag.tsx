import { makeAutoObservable } from "mobx";

class MobxTag {
    Tag :{curTag : string,testpage : number} = {curTag : "global",testpage : 0};

    constructor() {
        makeAutoObservable(this);
    }

    setTag(value : {curTag : any,testpage : number}) {
        this.Tag = value;
        console.log('MobxTag CurTag',this.Tag);
    }

    getTag() {
        return this.Tag;
    }
    
}

const MyMobxTag = new MobxTag();

export default MyMobxTag;