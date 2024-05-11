import { SyntheticEvent, useCallback, useState } from "react";
import { Podcast } from "../../models/models";
import skeletonStyle from "../../styles/skeleton.module.css";
import style from "./PodcastTile.module.css";

interface PodcastTileProps {
  podcast: Podcast;
}
export function PodcastTile({ podcast }: PodcastTileProps) {
  const [imgLoading, setImgLoading] = useState(true);
  const handleLoad = useCallback((event: SyntheticEvent<HTMLImageElement>) => {
    setImgLoading(false);
    return event.target;
  }, []);
  return (
    <div className={style.tile}>
      <div className={style.tileImage}>
        <picture className={imgLoading ? skeletonStyle.skeleton : ""}>
          <source media="(max-width: 30px)" srcSet={podcast.artworkUrl30} />
          <source media="(max-width: 60px)" srcSet={podcast.artworkUrl60} />
          <source media="(max-width: 100px)" srcSet={podcast.artworkUrl100} />
          <img
            loading="lazy"
            style={imgLoading ? { visibility: "hidden" } : {}}
            src={podcast.artworkUrl600}
            onLoad={handleLoad}
          />
        </picture>
      </div>

      <span className={style.tileTitle}>{podcast.trackName}</span>
    </div>
  );
}
