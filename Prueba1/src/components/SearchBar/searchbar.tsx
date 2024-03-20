import { useCallback, useRef } from 'react';
import './searchbar.css'
interface SearchCallback {
    (searchValue: string): void;
  }
interface inputs {
    onSearchSubmit : SearchCallback,
}
export function SearchBar ({onSearchSubmit}: inputs) {
    const debounceRef = useRef(-1);
    const handleSubmit = useCallback((ev: React.SyntheticEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const formData = new FormData(ev.target as HTMLFormElement)
        onSearchSubmit(formData.get('searchValue') as string);
    },[onSearchSubmit]);

    const handleKeyUp = useCallback( (ev: React.BaseSyntheticEvent<KeyboardEvent> ) => {
        if(debounceRef.current !== -1 ) {
            clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(()=>{
            onSearchSubmit(ev.target.value);
        },350)
    },[onSearchSubmit])
    return (
    <form onSubmit={handleSubmit}>
        <input name="searchValue" className="searchText" onKeyUp={handleKeyUp} placeholder="Avengers, James Bond, Operación UNCLE" id="" />
        <button className="searchAction" type='submit'>Buscar</button>
    </form>
    )
}