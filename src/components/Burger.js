import { setPragma, styled } from "goober";
import { h } from "preact";

setPragma(h);

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "40px",
  padding: "10px",
  borderRadius: "50%"
});

const BurgerIcon = styled("a")({
  display: "block",
  cursor: "pointer",
  textDecoration: "none",
  color: "#333",
  svg: {
    width: "20px",
    height: "20px",
    fill: "#333"
  }
});

const Burger = ({ handler, isCollapsed }) => {
  return (
    <Wrapper isCollapsed={isCollapsed}>
      {isCollapsed ? (
        <BurgerIcon onClick={() => handler()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="58"
            viewBox="0 0 76 58"
            fill="none"
          >
            <defs />
            <path
              fill="#000"
              d="M76 29a4 4 0 01-4 4H13.6l18.1 18.2a4 4 0 010 5.7 4 4 0 01-2.8 1.1c-1 0-2.1-.4-2.8-1.2l-24.9-25a3.9 3.9 0 010-5.6l24.9-25a4 4 0 015.7 0 4 4 0 010 5.7L13.6 25H72a4 4 0 014 4z"
            />
          </svg>
        </BurgerIcon>
      ) : (
        <BurgerIcon onClick={() => handler()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="51"
            viewBox="0 0 80 51"
            fill="none"
          >
            <defs />
            <path
              fill="#000"
              d="M76 8H4a4 4 0 01-4-4 4 4 0 014-4h72a4 4 0 014 4 4 4 0 01-4 4zm4 17.4a4 4 0 00-4-4H4a4 4 0 00-4 4 4 4 0 004 4h72a4 4 0 004-4zM44 46.7a4 4 0 00-4-4H4a4 4 0 00-4 4 4 4 0 004 4h36a4 4 0 004-4z"
            />
          </svg>
        </BurgerIcon>
      )}
    </Wrapper>
  );
};

export default Burger;
