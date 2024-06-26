import { memo, useId, useRef } from "react";
import styles from "./searchbar.module.css";
import { Search } from "lucide-react";
interface SearchCallback {
  (searchValue: string): void;
}
interface inputs {
  onSearchSubmit: SearchCallback;
  placeholder: string;
  debounceTime?: number;
  customClasses?: string;
  buttonTitle: string;
}
export const SearchBar = memo(function SearchBar({
  onSearchSubmit,
  placeholder,
  debounceTime,
  buttonTitle,
  customClasses,
}: inputs) {
  const debounceRef = useRef(-1);
  const formID = useId();
  const inputID = useId();
  const buttonID = useId();
  const lastValue = useRef<string>("");
  const handleSubmit = (ev: React.SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = new FormData(ev.target as HTMLFormElement);
    onSearchSubmit(formData.get("searchValue") as string);
  };

  const handleKeyUp = (ev: React.BaseSyntheticEvent<KeyboardEvent>) => {
    if (debounceRef.current !== -1) {
      window.clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      const value: string = (ev.target.value ?? "").trim();

      if (value !== lastValue.current) {
        lastValue.current = value;
        onSearchSubmit(value);
      }
    }, debounceTime);
  };
  return (
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
        onKeyUp={handleKeyUp}
        placeholder={placeholder}
      />
      <button id={buttonID} className={styles.searchAction} type="submit">
        <Search />
        {buttonTitle}
      </button>
    </form>
  );
});
