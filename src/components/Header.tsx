import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  setInputValue: (something: string) => void;
}
const Header = ({ setInputValue }: Props) => {
  const input = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    if (input.current !== null) {
      setInputValue(input.current.value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (input.current !== null) setInputValue(input.current.value);
    }
  };
  return (
    <header role="header">
      <section role="header-container" className="header-container">
        <h1>devfinder</h1>
        <section role="searchbox" id="filter">
          <span>
            <BsSearch />
          </span>
          <input
            ref={input}
            type="text"
            placeholder="Search Github username"
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleInput}>Search</button>
        </section>
      </section>
    </header>
  );
};

export default Header;
