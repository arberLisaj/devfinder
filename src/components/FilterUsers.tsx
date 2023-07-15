import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  setInputValue: (something: string) => void;
}

const FilterUsers = ({ setInputValue }: Props) => {
  const input = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    if (input.current !== null) {
      setInputValue(input.current.value);
    }
  };
  return (
    <section role="searchbox" id="filter">
      <span>
        <BsSearch />
      </span>
      <input
        ref={input}
        type="text"
        placeholder="Search Github username"
      />
      <button onClick={handleInput}>Search</button>
    </section>
  );
};

export default FilterUsers;
