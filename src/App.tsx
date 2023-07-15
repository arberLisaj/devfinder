import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import FilterUsers from "./components/FilterUsers";
import Header from "./components/Header";
import User from "./components/User";
import "./styles/styles.css";

interface User {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;

  public_repos: number;
  followers: number;
  following: number;

  location: string;
  website: string;
  company: string | null;
}

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const localValue = localStorage.getItem("darkModeState");
    if (localValue == null) return;
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("darkModeState", JSON.stringify(darkMode));
  }, [darkMode]);

  const [inputValue, setInputValue] = useState("arberlisaj");
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User>(`https://api.github.com/users/${inputValue}`, {
        signal: controller.signal,
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err);
      });
  }, [inputValue]);

  console.log(user);

  return (
    <main role="main">
      <Header darkMode={darkMode} setDarkMode={(data) => setDarkMode(data)} />
      <FilterUsers
        inputValue={inputValue}
        setInputValue={(data) => setInputValue(data)}
      />
      <User
        profilePicture={user?.avatar_url}
        name={user?.name}
        username={user?.login}
        bio={user?.bio}
        repositories={user?.public_repos}
        followers={user?.followers}
        following={user?.following}
        location={user?.location}
        website={user?.website}
        company={user?.company}
      />
    </main>
  );
};

export default App;
