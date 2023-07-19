import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import Header from "./components/Header";
import User from "./components/User";
import "./styles/styles.css";

interface User {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  repos_url: string;
  followers_url: string;
  blog: string;
  html_url: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  website: string;
  company: string | null;
}

const App = () => {
  const [inputValue, setInputValue] = useState("arberlisaj");
  const [user, setUser] = useState<User>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get<User>(`https://api.github.com/users/${inputValue}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [inputValue]);
  useEffect(() => {
    setError("");
  }, [inputValue]);
  
  return (
    <main role="main">
      <Header setInputValue={(data) => setInputValue(data)} />
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {!error && !isLoading && (
        <User
          profilePicture={user?.avatar_url}
          name={user?.name}
          username={user?.login}
          bio={user?.bio}
          link={user?.html_url}
          repositories={user?.public_repos}
          followers={user?.followers}
          following={user?.following}
          location={user?.location}
          website={user?.blog}
          twitter={user?.twitter_username}
          company={user?.company}
          followers_url={user?.followers_url}
        />
      )}
    </main>
  );
};

export default App;
