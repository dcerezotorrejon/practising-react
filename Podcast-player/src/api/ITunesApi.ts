import { PodcastSearch } from "../models/models";

interface APIParams {
    term: string,
    
}
export class ItunesAPI {  
    public search = async ({term}:APIParams) : Promise<PodcastSearch>=> {
        const encodedTerm = window.encodeURI(term);
        const f = await fetch(`https://itunes.apple.com/search?media=podcast&term=${encodedTerm}`);
        return f.json();
    }

    
}