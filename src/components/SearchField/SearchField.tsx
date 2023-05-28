import SearchIcon from "../../svgs/SearchIcon";
import { IconWrapper, InputWrapper, SearchInput } from "./style";

type SearchFieldProps = {
  placeholder: string;
  onSearch: (searchWord: string) => void;
};

function SearchField({ placeholder, onSearch }: SearchFieldProps) {
  return (
    <InputWrapper>
      <SearchInput
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </InputWrapper>
  );
}

export default SearchField;
