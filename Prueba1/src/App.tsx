
import './App.css'
import { SearchBar } from './components/SearchBar/Searchbar'
import { SearchResults } from './components/SearchResultsArea/SearchResultsArea'
import { useFilms } from './hooks/useFilm'

function App() {
  const { films, getFilms, isLoading } = useFilms();
  const onSearchSubmit = (seachValue: string)=> {
    getFilms(seachValue);
  }

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
