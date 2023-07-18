import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Repo {
  id: number;
  name: string;
}
interface Props {
  setData: (data: boolean) => void;
  repoData: Repo[];
}
const Repositories = ({ setData, repoData }: Props) => {
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
          {repoData.map((r) => (
            <li key={r.id}>{r.name}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Repositories;
