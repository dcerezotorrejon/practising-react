import { SearchResult } from "../models/models";

export class OMDBapi {
    private  readonly URL = 'https://www.omdbapi.com/'; 
    constructor (
        private apiKey : string
    ){}
    public async search (searchCriteria :string) : Promise<SearchResult> {
        const endpoint = `${this.URL}?apiKey=${this.apiKey}&s=${searchCriteria}`
        const response = await fetch(endpoint);
        return response.json();
    }
}