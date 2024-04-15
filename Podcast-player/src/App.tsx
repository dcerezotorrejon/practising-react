
import { useCallback, useState } from 'react';
import './App.css'
import { SearchBar } from './components/SearchBar/searchbar'

function App() {
  const  [result, setResult] = useState('No hay búsqueda')
  const onSearchSubmit = useCallback((seachValue: string)=> {
    setResult(seachValue);
  },[])

  return (
    <>
      <SearchBar onSearchSubmit={onSearchSubmit}
             placeholder='Busca tu podcast favorito'
             debounceTime={500}
             searchLiteral='Buscar'></SearchBar>
      <p>{result}</p>
    </>
  )
}

export default App
