import { useId, FormEvent, useContext, useCallback } from "react";
import styles from "./searchbar.module.css";
import { SearchContext } from "../Contexts/SearchContext";
import { SearchButton } from "../SearchButton/SearchButton";

interface inputs {
  placeholder: string;
  customClasses?: string;
  buttonTitle: string;
}
export const SearchBar = function SearchBar({
  placeholder,
  buttonTitle,
  customClasses,
}: inputs) {
  const formID = useId();
  const inputID = useId();
  const buttonID = useId();

  const { setSearchTerm } = useContext(SearchContext);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const form = new FormData(event.target as HTMLFormElement);
      setSearchTerm(form.get("searchValue") as string);
    },
    [setSearchTerm]
  );

  const handleChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(ev.target.value);
    },
    [setSearchTerm]
  );
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${styles.form} ${customClasses ?? ""}`}
        id={formID}
      >
        <input
          autoComplete="off"
          id={inputID}
          className={styles.searchText}
          name="searchValue"
          onChange={handleChange}
          placeholder={placeholder}
        />
        <SearchButton
          id={buttonID}
          buttonTitle={buttonTitle}
          className={styles.searchAction}
        />
      </form>
    </>
  );
};
