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

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User>(`https://api.github.com/users/${inputValue}`, {
        signal: controller.signal,
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, [inputValue]);

  // console.log(user);

  return (
    <main role="main">
      <Header setInputValue={(data) => setInputValue(data)} />
      {error && <p className="error">{error}</p>}
      {!error && (
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
        />
      )}
    </main>
  );
};

export default App;
