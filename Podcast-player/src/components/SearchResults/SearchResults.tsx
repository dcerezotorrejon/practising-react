import { useContext } from "react";
import style from "./SearchResults.module.css";
import { SearchContext } from "../Contexts/SearchContext";
import { SearchResultContent } from "./SearchResultContent";
export function SearchResults() {
  const { showLoading, podcastSearchState: results } =
    useContext(SearchContext);
  return (
    <div className={style.container}>
      <SearchResultContent
        isLoading={showLoading}
        pocastStatus={results.state}
        podcastResults={results.result}
      />
    </div>
  );
}
