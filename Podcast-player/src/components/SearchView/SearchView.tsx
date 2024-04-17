
import { SearchBar } from '../SearchBar/searchbar'
import style from './SearchView.module.css'
import { SearchResult } from '../SearchResult/SearchResult';
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
            <SearchResult result={JSON.stringify(podcastSearchState.result) as string}></SearchResult>
        </div>
    )
}