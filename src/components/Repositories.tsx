import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiFillBook } from "react-icons/ai";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  language: string;
}
interface Props {
  setData: (data: boolean) => void;
  username: string;
}
const Repositories = ({ setData, username }: Props) => {
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

  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get<Repo[]>(`https://api.github.com/users/${username}/repos`, {
        signal: controller.signal,
      })
      .then((res) => {
        setLoading(false);
        setRepos(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false);
      });
    return () => controller.abort();
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
          {error && <p>{error}</p>}
          {isLoading && <p className="loading">Loading...</p>}
          {repos.map((r) => (
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
