import { useCallback, useRef, useState } from "react"
import { ItunesAPI } from "../api/ITunesApi";

export enum PodcastSearchStatesEnum {
    LOADING, SUCCESS, NOT_FOUND, ERROR, EMPTY
}
interface UseSearchState {
    state:  PodcastSearchStatesEnum,
    result : unknown
}

export const useSearchPodcast = () => {
    const api = useRef<ItunesAPI>(new ItunesAPI()).current;
    const [podcastSearchState, setPodcastSearchState ]= useState<UseSearchState>({
        state: PodcastSearchStatesEnum.EMPTY,
        result: null
    });

    const  search = useCallback((searchTerm = '')=> {
        if(searchTerm.length === 0) {
            return setPodcastSearchState({state: PodcastSearchStatesEnum.EMPTY,  result: null});
        }
        api.search({term: searchTerm}).then(
            (result)=> {
                setPodcastSearchState({state: PodcastSearchStatesEnum.SUCCESS,  result});
            },
            () => {
                setPodcastSearchState({state : PodcastSearchStatesEnum.ERROR, result: null});
            }
            )
    },[api])
    return { podcastSearchState, search}
}