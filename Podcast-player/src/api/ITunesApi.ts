import { PodcastSearch } from "../models/models";

interface APIParams {
  term: string;
}
export class ItunesAPI {
  private LastAbortController = new AbortController();
  public search = async ({ term }: APIParams): Promise<PodcastSearch> => {
    this.abortLastSearch();
    this.LastAbortController = new AbortController();
    const encodedTerm = window.encodeURI(term);
    const f = await fetch(
      `https://itunes.apple.com/search?media=podcast&term=${encodedTerm}`,
      { signal: this.LastAbortController.signal }
    );
    return f.json();
  };

  public abortLastSearch = () => {
    this.LastAbortController.abort();
  };
}
