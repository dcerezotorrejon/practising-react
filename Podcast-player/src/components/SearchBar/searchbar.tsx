import { useId, FormEvent, useContext } from "react";
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

  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    console.log("submit");
    setSearchTerm(form.get("searchValue") as string);
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(ev.target.value);
  };
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
          value={searchTerm}
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
