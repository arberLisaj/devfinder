import { useEffect, useState } from "react";
import Header from "./components/Header";
import useFetchUser from "./hooks/useFetchUser";
import Section from "./components/Section";
import { Button } from "./components/ui/button";

const App = () => {
  const [inputValue, setInputValue] = useState<string>();
  const { user, error } = useFetchUser(inputValue);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <main className="bg-slate-100 min-h-screen">
      <Header setInput={(value) => setInputValue(value)} />
      {error && (
        <>
          <p className="text-3xl text-red-600 text-center mt-[20vh] mb-2">
            Oops! Something went wrong
          </p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="mx-auto block"
          >
            try again
          </Button>
        </>
      )}

      {!error && (
        <Section>
          <h1>{user?.login}</h1>
        </Section>
      )}
    </main>
  );
};

export default App;
