import { ReactNode, useCallback, useId, useRef } from 'react';
import styles from './searchbar.module.css';
interface SearchCallback {
    (searchValue: string): void;
  }
interface inputs {
    onSearchSubmit : SearchCallback,
    placeholder: string,
    debounceTime?: number,
    searchLiteral?: string,
    customClasses?: string,
    children?:ReactNode
}
export function SearchBar ({onSearchSubmit, placeholder, debounceTime, children, customClasses}: inputs) {
    const debounceRef = useRef(-1);
    const formID = useId();
    const inputID = useId();
    const buttonID = useId();
    const lastValue = useRef<string>('');
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
            const value:string  = (ev.target.value ?? '').trim();

            if(value !== lastValue.current){
                lastValue.current = value;
                onSearchSubmit(value);
            }
            
        }, debounceTime)
    },[debounceTime, onSearchSubmit])
    return (
    <form onSubmit={handleSubmit} className={styles.form + (customClasses??'')} id={formID} >
        <input id={inputID} className={styles.searchText} name="searchValue"  onKeyUp={handleKeyUp} placeholder={placeholder}/>
        <button id={buttonID} className={styles.searchAction} type='submit'>{children}</button>
    </form>
    )
}