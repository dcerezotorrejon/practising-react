import { useRef, useState } from "react";
import { MappedFilm, SearchResult } from "../models/models";
import { OMDBapi } from "../api/OMDB-api";
export function useFilms () {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [results, setResults] = useState<SearchResult>();
    const lastSearch = useRef<string>(''); 
    let films: MappedFilm[] = [];
    const api =  new OMDBapi('3d1213a1');
    const getFilms = (searchCriteria :string = '') => {
        const trimmedSearch = searchCriteria.trim();
        if (trimmedSearch.length === 0 || lastSearch.current === trimmedSearch) {
            return false;
        }
        lastSearch.current = trimmedSearch;
        setIsLoading(true);
        api.search(trimmedSearch)
            .then (
                (data) => {
                    setResults(data);
                }
            , () => {})
            .finally(()=> {
                setIsLoading(false);
            })
    }

    if (results?.Response === 'True') {
        films = results.Search.map((films) => {
                return {
                    poster: films.Poster,
                    title: films.Title,
                    type: films.Type,
                    year: films.Year,
                    id: films.imdbID
                }
            })
    }
    return {films, getFilms, isLoading};

}