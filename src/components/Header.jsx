import React, { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

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
          maxWidth: "1200px",
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
          }}
        >
          Devfinder
        </a>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setInputValue(inputRef.current.value);
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
            required
            minLength={3}
            type="text"
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
