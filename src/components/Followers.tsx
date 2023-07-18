import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Entity {
  id: number;
  login: string;
}
interface Props {
  setData: (data: boolean) => void;
  title: string;
  entity: Entity[];
}

const Followers = ({ setData, title, entity }: Props) => {
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
          {entity.map((e) => (
            <li key={e.id}>{e.login}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Followers;
