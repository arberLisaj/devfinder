import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  login: string;
}

const useFetchUser = (inputValue: string | undefined) => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    if (!inputValue) return;
    axios
      .get<User>(`https://api.github.com/users/${inputValue}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setUser(() => res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    return () => controller.abort();
  }, [inputValue]);

  useEffect(() => {
    setError("");
  }, [inputValue]);

  return { user, error, isLoading };
};

export default useFetchUser;
