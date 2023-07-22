import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Spinner from "../assets/spinner.svg";

interface Following {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}
interface Props {
  setData: (data: boolean) => void;
  username: string;
}

const Followers = ({ setData, username }: Props) => {
  const [followers, setFollowers] = useState<Following[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get(`https://api.github.com/users/${username}/followers`, {
        signal: controller.signal,
      })
      .then((res) => {
        setFollowers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setData(false);
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);
  return (
    <section className="container" onClick={() => setData(false)}>
      <section className="info" onClick={(e) => e.stopPropagation()}>
        <header>
          <h1>Following</h1>
          <span onClick={() => setData(false)}>
            <AiOutlineClose size="20px" />
          </span>
        </header>

        <ul>
          {isLoading && (
            <img className="loading" src={Spinner} alt="Loading..." />
          )}
          {error && <p>{error}</p>}
          {followers.map((e) => (
            <li key={e.id}>
              <div className="followers">
                <img src={e.avatar_url} alt="profile" />{" "}
                <a target="_blank" href={e.html_url}>
                  {e.login}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Followers;
