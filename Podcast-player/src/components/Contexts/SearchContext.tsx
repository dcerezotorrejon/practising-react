import {
  createContext,
  ReactNode,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";

interface SearchContextType {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  podcastSearchState: UseSearchState;
}
import { useSearchPodcast, UseSearchState } from "../../hooks/useSearch";
export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);
export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const { podcastSearchState, search } = useSearchPodcast();
  const debounceRef = useRef(-1);
  useEffect(() => {
    window.clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      search(deferredSearchTerm ?? "");
    }, 250);
  }, [deferredSearchTerm, search]);

  const context: SearchContextType = {
    setSearchTerm,
    searchTerm,
    podcastSearchState,
  };

  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  );
};
