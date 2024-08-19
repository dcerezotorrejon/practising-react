import { createContext, ReactNode, useEffect, useRef, useState } from "react";

interface SearchContextType {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  podcastSearchState: UseSearchState;
  showLoading: boolean;
}
import {
  PodcastSearchStatesEnum,
  useSearchPodcast,
  UseSearchState,
} from "../../hooks/useSearch";
export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);
export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const { podcastSearchState, search } = useSearchPodcast();
  const debounceRef = useRef(-1);
  useEffect(() => {
    setShowLoading(true);
    window.clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      search(searchTerm ?? "");
    }, 400);
  }, [searchTerm, search]);

  useEffect(() => {
    if (podcastSearchState.state !== PodcastSearchStatesEnum.LOADING) {
      setShowLoading(false);
    }
  }, [podcastSearchState]);

  const context: SearchContextType = {
    setSearchTerm,
    searchTerm,
    podcastSearchState,
    showLoading,
  };

  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  );
};
