import { Podcast } from "../../models/models"

interface PodcastTileProps {
    podcast : Podcast
}
export function PodcastTile ({podcast}: PodcastTileProps){

    return (
        <div>
            <picture>
                <source media="(max-width: 30px)" srcSet={podcast.artworkUrl30} />
                <source media="(max-width: 60px)" srcSet={podcast.artworkUrl60} />
                <source media="(max-width: 100px)" srcSet={podcast.artworkUrl100} />
                <img src={podcast.artworkUrl600}/>
            </picture>

        </div>
    )
}