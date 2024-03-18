import { MappedFilm } from "../../models/models"
import './FilmPoster.css'
interface InputProps {
    film: MappedFilm
}
export function FilmPoster({film}: InputProps) {
    return (
        <div className="film">
            <img className="image" src={film.poster}></img>
            <p className="description">
                <b>Título:</b> {film.title}<br/>
                <b>Tipo de metraje:</b> {film.type}<br/>
                <b>Año:</b> {film.year}<br/>
                <b>ID:</b> {film.id}
            </p>
        </div>
    )
}