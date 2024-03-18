export interface SearchResult {
    Search:       Film[];
    totalResults: string;
    Response:     string;
}

export interface Film {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   Type;
    Poster: string;
}
export interface MappedFilm {
    title:  string;
    year:   string;
    id: string;
    type:   Type;
    poster: string;
}

export enum Type {
    Game = "game",
    Movie = "movie",
}
