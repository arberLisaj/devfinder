import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    if (!username) return;
    axios
      .get(`https://api.github.com/users/${username}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setUser(() => res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    setError("");
    return () => controller.abort();
  }, [username]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <main>
      <Header setUsername={(value) => setUsername(value)} />
      {error ? (
        <p
          style={{
            color: "red",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          {error}
        </p>
      ) : !user ? (
        <p
          style={{
            textAlign: "center",
            color: "#333",
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "7px",
          }}
        >
          <BsSearch />
          Search users e.g. arberlisaj
        </p>
      ) : isLoading ? (
        <AiOutlineLoading3Quarters className="spinner" />
      ) : (
        <Profile {...user} />
      )}
    </main>
  );
}

export default App;
