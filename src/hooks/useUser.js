import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useUser = (inputValue) => {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!inputValue) return;
    setLoading(true);
    const controller = new AbortController();
    axios
      .get(`https://api.github.com/users/${inputValue}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    setError("");
    return () => controller.abort();
  }, [inputValue]);
};
export default useUser;
