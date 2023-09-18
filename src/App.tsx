import { useEffect, useState } from "react";
import Header from "./components/Header";
import useFetchUser, { User } from "./hooks/useFetchUser";
import Section from "./components/Section";
import { Button } from "./components/ui/button";
import UserTable from "./components/UserTable";
import { AiOutlineSearch } from "react-icons/ai";

const App = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [users, setUsers] = useState<User[]>([]);
  const { user, error } = useFetchUser(inputValue);
  useEffect(() => {
    if (user) setUsers([...users, user]);
  }, [user]);

  return (
    <main className=" min-h-screen b-red-400">
      <Header setInput={(value) => setInputValue(value)} />
      {error && (
        <>
          <p className="text-3xl text-red-600 text-center mt-[20vh] mb-4">
            Oops! Something went wrong <br /> or no such user
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
          {user ? (
            <>
              <h1 className="text-2xl mb-4">Searches history...</h1>
              <UserTable users={users} />
            </>
          ) : (
            <p className="text-2xl w-fit flex items-center gap-3 mx-auto mt-8">
              <AiOutlineSearch /> Search for a user...
            </p>
          )}
        </Section>
      )}
    </main>
  );
};

export default App;
