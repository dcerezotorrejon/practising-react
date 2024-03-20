
import { useCallback } from 'react';
import './App.css'
import { SearchBar } from './components/SearchBar/searchbar'
import { SearchResults } from './components/SearchResultsArea/SearchResultsArea'
import { useFilms } from './hooks/useFilm'

function App() {
  const { films, getFilms, isLoading } = useFilms();
  const onSearchSubmit = useCallback((seachValue: string)=> {
    getFilms(seachValue);
  }, [getFilms])

  return (
    <>
      <SearchBar onSearchSubmit={onSearchSubmit}></SearchBar>
      {
        !isLoading? (<SearchResults filmList={films}></SearchResults>): (<p>Cargando...</p>)
      }
    </>
  )
}

export default App
