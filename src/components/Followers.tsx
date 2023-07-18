import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Entity {
  id: number;
  login: string;
  avatar_url: string;
}
interface Props {
  setData: (data: boolean) => void;
  title: string;
  isLoading: boolean;
  entity: Entity[];
}

const Followers = ({ setData, title, entity, isLoading }: Props) => {
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
          <h1>{title}</h1>
          <span onClick={() => setData(false)}>
            <AiOutlineClose size="20px" />
          </span>
        </header>

        <ul>
          {isLoading && <p>Loading...</p>}
          {entity.map((e) => (
            <li key={e.id}>
              <div className="followers">
                <img src={e.avatar_url} alt="profile" /> {e.login}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Followers;
