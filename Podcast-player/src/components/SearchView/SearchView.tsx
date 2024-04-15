
import { useCallback, useState } from 'react';
import { SearchBar } from '../SearchBar/searchbar'
import style from './SearchView.module.css'
import { Search } from 'lucide-react';
import { SearchResult } from '../SearchResult/SearchResult';
export function SearchView () {
    const  [result, setResult] = useState('No hay búsqueda')
    const onSearchSubmit = useCallback((seachValue: string)=> {
    setResult(seachValue);
  },[])
    return (
        <div className={style.searchview}>
            <SearchBar onSearchSubmit={onSearchSubmit}
            placeholder='Busca tu podcast favorito'
            debounceTime={350}><Search/>Buscar</SearchBar>
            <SearchResult result={result}></SearchResult>
        </div>
    )
}