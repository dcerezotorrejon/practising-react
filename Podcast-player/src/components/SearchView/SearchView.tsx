
import { SearchBar } from '../SearchBar/SearchBar'
import style from './SearchView.module.css'
import {  SearchResults } from '../SearchResults/SearchResults';
import { useSearchPodcast } from '../../hooks/useSearch';
export function SearchView () {
    const {podcastSearchState, search} = useSearchPodcast();
    return (
        <div className={style.searchview}>
            <SearchBar onSearchSubmit={search}
                placeholder='Busca tu podcast favorito'
                customClasses={style.searchbar}
                debounceTime={500}
                buttonTitle='Buscar'
                />
            <SearchResults results={podcastSearchState}></SearchResults>
        </div>
    )
}