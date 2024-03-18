import { MappedFilm } from "../../models/models";
import {FilmPoster } from '../FilmPoster/FilmPoster';
import './SearchResultsArea.css'
interface inputTypes {
    filmList: MappedFilm[]
}

export function SearchResults({filmList}: inputTypes) {
    if ( filmList.length > 0) {
        return (
             <div className="resultArea">
                {filmList.map(
                    (film) => (
                        <FilmPoster  key={film.id} film={film}></FilmPoster>
                    )
                )}
            </div>
        )
    }
    return (
        <p>Lo sentimos, no se han podido encontrar resultados</p>
    )
    
}