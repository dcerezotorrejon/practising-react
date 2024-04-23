import { useCallback, useRef, useState } from "react"
import { ItunesAPI } from "../api/ITunesApi";
import { Podcast } from "../models/models";

export enum PodcastSearchStatesEnum {
    LOADING, SUCCESS, ERROR, SEARCH_EMPTY
}
export interface UseSearchState {
    state:  PodcastSearchStatesEnum,
    result : Podcast[] |null
}

export const useSearchPodcast = () => {
    const api = useRef<ItunesAPI>(new ItunesAPI()).current;
    const [podcastSearchState, setPodcastSearchState ]= useState<UseSearchState>({
        state: PodcastSearchStatesEnum.EMPTY,
        result: null
    });

    const  search = useCallback((searchTerm = '')=> {
        if(searchTerm.length === 0) {
            return setPodcastSearchState({state: PodcastSearchStatesEnum.SEARCH_EMPTY,  result: null});
        }
        setPodcastSearchState({state: PodcastSearchStatesEnum.LOADING,  result: null});
        api.search({term: searchTerm}).then(
            (result)=> {
                setPodcastSearchState({state: PodcastSearchStatesEnum.SUCCESS,  result: result.results});
            },
            () => {
                setPodcastSearchState({state : PodcastSearchStatesEnum.ERROR, result: null});
            }
            )
    },[api])
    return { podcastSearchState, search}
}