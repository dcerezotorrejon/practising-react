import { SearchBar } from "../SearchBar/searchbar";
import style from "./SearchView.module.css";
import { SearchResults } from "../SearchResults/SearchResults";
import { SearchContext } from "../Contexts/SearchContext";
import { useContext } from "react";
export default function SearchView() {
  const { podcastSearchState } = useContext(SearchContext);
  return (
    <div className={style.searchview}>
      <SearchBar
        placeholder="Busca tu podcast favorito"
        customClasses={style.searchbar}
        buttonTitle="Buscar"
      />
      <SearchResults results={podcastSearchState}></SearchResults>
    </div>
  );
}
