import { Search } from "lucide-react";
import { memo } from "react";
interface SearchButtonProps {
  id: string;
  className: string;
  buttonTitle: string;
}

export const SearchButton = memo(function SearchButton({
  id,
  className,
  buttonTitle,
}: SearchButtonProps) {
  return (
    <button id={id} className={className} type="submit">
      <Search />
      {buttonTitle}
    </button>
  );
});
