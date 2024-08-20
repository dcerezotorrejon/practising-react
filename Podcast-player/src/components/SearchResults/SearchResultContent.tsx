import { memo } from "react";
import { PodcastSearchStatesEnum } from "../../hooks/useSearch";
import { Podcast } from "../../models/models";
import { MemorizedSpinner } from "../Spinner/Spinner";
import { PodcastTile } from "../PodcastTile/PodcastTile";
import style from "./SearchResults.module.css";

interface SearchResultContentProps {
  podcastResults: Podcast[] | null;
  pocastStatus: PodcastSearchStatesEnum;
  isLoading: boolean;
}

export const SearchResultContent = memo(function SearchResultContent({
  isLoading,
  pocastStatus,
  podcastResults,
}: SearchResultContentProps) {
  if (isLoading) {
    return <MemorizedSpinner />;
  }
  if (podcastResults && pocastStatus === PodcastSearchStatesEnum.SUCCESS) {
    return (
      <div className={style.area}>
        {podcastResults?.map((el) => {
          return <PodcastTile key={el.collectionId} podcast={el}></PodcastTile>;
        })}
      </div>
    );
  }
});
