import { PodcastSearchStatesEnum, UseSearchState } from "../../hooks/useSearch";
import { PodcastTile } from "../PodcastTile/PodcastTile";
import { Spinner } from "../Spinner/Spinner";
import style from "./SearchResults.module.css";
interface SearchResultProps {
  results: UseSearchState;
}
export function SearchResults({ results }: SearchResultProps) {
  const loadingView = <Spinner />;
  const errorView = <p>There was an error retrieving data</p>;
  const resultContainerView = (
    <div className={style.area}>
      {results.result?.map((el) => {
        return <PodcastTile key={el.collectionId} podcast={el}></PodcastTile>;
      })}
    </div>
  );
  const renderMap: Record<number, React.ReactNode> = {
    [PodcastSearchStatesEnum.LOADING]: loadingView,
    [PodcastSearchStatesEnum.ERROR]: errorView,
    [PodcastSearchStatesEnum.SUCCESS]: resultContainerView,
  };
  return <div className={style.container}>{renderMap[results.state]}</div>;
}
