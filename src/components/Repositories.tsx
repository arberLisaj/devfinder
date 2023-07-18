import { useEffect } from "react";
import { AiOutlineClose, AiFillBook } from "react-icons/ai";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  language: string;
}
interface Props {
  setData: (data: boolean) => void;
  repoData: Repo[];
  isLoading: boolean;
}
const Repositories = ({ setData, repoData, isLoading }: Props) => {
  // esc key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setData(false);
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  return (
    <section className="container" onClick={() => setData(false)}>
      <section className="info" onClick={(e) => e.stopPropagation()}>
        <header>
          <h1>Repositories</h1>
          <span onClick={() => setData(false)}>
            <AiOutlineClose size="20px" />
          </span>
        </header>
        <ul>
          {isLoading && <p>Loading...</p>}
          {repoData.map((r) => (
            <li key={r.id}>
              <div className="link">
                <span>
                  <AiFillBook />
                </span>
                <a target="_blank" href={r.html_url}>
                  {r.name}
                </a>
              </div>
              <div className="language">{r.language}</div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Repositories;
