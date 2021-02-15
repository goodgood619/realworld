import { makeAutoObservable } from "mobx";

class MobxTag {
    curTag :string = "global";
    preTag :string = "global";

    constructor() {
        makeAutoObservable(this);
    }

    setCurTag(value : any) {
        this.curTag = value;
        console.log('MobxTag CurTag',this.curTag);
    }

    setPreTag(value : any) {
        this.preTag = value;
        console.log('MobxTag Pretag',this.preTag);
    }

    getCurTag() {
        return this.curTag;
    }

    getPreTag() {
        return this.preTag;
    }
    
}

const MyMobxTag = new MobxTag();

export default MyMobxTag;