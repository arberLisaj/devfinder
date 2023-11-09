import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Header({ setUsername }) {
  const inputRef = useRef(null);

  function handleSubmit() {
    const value = inputRef.current.value;
    if (value.length > 2) {
      setUsername(value);
      inputRef.current.value = "";
    }
  }

  return (
    <header
      style={{
        borderBottom: "1px solid gainsboro",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1100px",
          marginInline: "auto",
          paddingBlock: "10px",
          gap: "10px",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: "20px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          Devfinder
        </a>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid gainsboro",
            borderRadius: "4px",
            padding: "2px 10px",
          }}
        >
          <AiOutlineSearch size="20px" />
          <input
            style={{
              border: "none",
              padding: "4px 10px",
              width: "100%",
            }}
            placeholder="Search users e.g. arberlisaj"
            ref={inputRef}
            type="text"
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
