import { useRef } from 'react';
import SearchBarCSS from './Searchbar.module.css'
interface SearchCallback {
    (searchValue: string): void;
  }
interface inputs {
    onSearchSubmit : SearchCallback,
}
export function SearchBar ({onSearchSubmit}: inputs) {
    const debounceRef = useRef(-1);
    const handleSubmit = (ev: React.SyntheticEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const formData = new FormData(ev.target as HTMLFormElement)
        onSearchSubmit(formData.get('searchValue') as string);
    }

    const handleKeyUp = (ev: React.BaseSyntheticEvent<KeyboardEvent> ) => {
        if(debounceRef.current !== -1 ) {
            clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(()=>{
            onSearchSubmit(ev.target.value);
        },350)
    }

    return (
    <form onSubmit={handleSubmit} className={SearchBarCSS.searchForm}>
        <input name="searchValue" className={SearchBarCSS.searchText} onKeyUp={handleKeyUp} placeholder="Avengers, James Bond, Operación UNCLE" id="" />
        <button className={SearchBarCSS.searchAction} type='submit'>Buscar</button>
    </form>
    )
}