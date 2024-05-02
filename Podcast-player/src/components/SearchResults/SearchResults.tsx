import { PodcastSearchStatesEnum, UseSearchState } from "../../hooks/useSearch";
import { PodcastTile } from "../PodcastTile/PodcastTile";
import style from "./SearchResults.module.css";
interface SearchResultProps {
  results: UseSearchState;
}
export function SearchResults({ results }: SearchResultProps) {
  const loadingView = <p>Loading ...</p>;
  const errorView = <p>There was an error retrieving data</p>;
  const resultContainerView = (
    <>
      {results.result?.map((el) => {
        return <PodcastTile key={el.collectionId} podcast={el}></PodcastTile>;
      })}
    </>
  );
  const renderMap: Record<number, JSX.Element> = {
    [PodcastSearchStatesEnum.LOADING]: loadingView,
    [PodcastSearchStatesEnum.ERROR]: errorView,
    [PodcastSearchStatesEnum.SUCCESS]: resultContainerView,
  };
  return <div className={style.area}>{renderMap[results.state]}</div>;
}
