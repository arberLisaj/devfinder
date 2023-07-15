import { BsFillMoonFill, BsMoon } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: (something: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: Props) => {
  return (
    <header role="header">
      <section role="header-container">
        <h1>devfinder</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsFillMoonFill /> : <BsMoon />}
        </button>
      </section>
    </header>
  );
};

export default Header;
