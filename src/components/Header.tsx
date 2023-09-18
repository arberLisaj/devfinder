import { useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Props {
  setInput: (value: string) => void;
}
const Header = ({ setInput }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (inputRef.current && inputRef.current.value.length > 2) {
      setInput(inputRef.current!.value.replace(/\s+/g, ""));
      inputRef.current!.value = "";
    }
  };

  return (
    <header className="bg-gray-200 border border-gray-300">
      <nav className="flex p-2 py-4 justify-between items-center gap-4 max-w-[1200px] mx-auto">
        <div>
          <Link to="/">
            <h1 className="font-bold text-2xl flex items-center gap-2">
              <BsGithub /> DevFinder
            </h1>
          </Link>
          <p className="text-xs">
            Browse users and their profiles via the
            <Link
              className="mx-1 text-green-600 font-bold underline"
              target="_blank"
              to="https://docs.github.com/en/rest?apiVersion=2022-11-28"
            >
              Github API
            </Link>
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="max-w-[600px] w-full flex gap-2"
        >
          <Input
            type="search"
            name="searchbar"
            placeholder="Search for a user, e.g arberlisaj"
            className="w-full border-gray-300 p-5"
            autoFocus
            ref={inputRef}
          />
          <Button type="submit">Search</Button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
