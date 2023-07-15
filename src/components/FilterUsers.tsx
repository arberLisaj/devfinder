import { BsSearch } from "react-icons/bs";

interface Props {
  inputValue: string;
  setInputValue: (something: string) => void;
}

const FilterUsers = ({ inputValue, setInputValue }: Props) => {
  return (
    <section role="searchbox" id="filter">
      <span>
        <BsSearch />
      </span>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Search Github username"
      />
      <button>Search</button>
    </section>
  );
};

export default FilterUsers;
