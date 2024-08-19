import { SearchBar } from "../SearchBar/searchbar";
import style from "./SearchView.module.css";
import { SearchResults } from "../SearchResults/SearchResults";
import { SearchContextProvider } from "../Contexts/SearchContext";
export default function SearchView() {
  return (
    <div className={style.searchview}>
      <SearchContextProvider>
        <SearchBar
          placeholder="Busca tu podcast favorito"
          customClasses={style.searchbar}
          buttonTitle="Buscar"
        />
        <SearchResults />
      </SearchContextProvider>
    </div>
  );
}
