import { PodcastSearch } from "../models/models";

interface APIParams {
  term: string;
}
export class ItunesAPI {
  public search = ({ term }: APIParams) => {
    const abortController = new AbortController();
    const encodedTerm = window.encodeURI(term);
    const fetchData = fetch(
      `https://itunes.apple.com/search?media=podcast&term=${encodedTerm}&limit=200`,
      { signal: abortController.signal }
    );
    const reponsePromise = fetchData.then(
      (data) => data.json() as Promise<PodcastSearch>
    );
    return {
      reponsePromise,
      abortController,
    };
  };
}
