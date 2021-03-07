import { makeAutoObservable } from "mobx";

class MobxTag {
    Tag :{curTag : string,testpage : number} = {curTag : "global",testpage : 0};
    Article : Array<any> = [];
    ArticleCount : number = 0;

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

    setArticle(value :Array<any>) {
        this.Article = value;
    }

    getArticle() {
        return this.Article;
    }

    setArticleCount(value : number) {
        this.ArticleCount = value;
    }

    getArticleCount() {
        return this.ArticleCount;
    }
    
}

const MyMobxTag = new MobxTag();

export default MyMobxTag;