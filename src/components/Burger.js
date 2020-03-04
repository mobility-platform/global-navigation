import { setPragma, styled } from "goober";
import { h } from "preact";

setPragma(h);

const Wrapper = styled("button")(({ isCollapsed }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  width: isCollapsed ? "40px" : "20px",
  height: isCollapsed ? "40px" : "auto",
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: "none",
  padding: "0",
  margin: "0",
  color: "currentColor",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: isCollapsed ? "rgba(0, 0, 0, .3)" : "",
  }
}));

const BurgerIcon = styled("div")({
  display: "block",
  width: "20px",
  height: "20px",
  color: "currentColor",
  svg: {
    width: "20px",
    height: "20px",
    fill: "currentColor"
  }
});

const Burger = ({ handler, isCollapsed }) => {
  return (
    <Wrapper isCollapsed={isCollapsed} onClick={() => handler()}>
      {isCollapsed ? (
        <BurgerIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 448 512"
          >
            <defs />
            <path
              d="M16 132h416a16 16 0 0016-16V76a16 16 0 00-16-16H16A16 16 0 000 76v40a16 16 0 0016 16zm0 160h416a16 16 0 0016-16v-40a16 16 0 00-16-16H16a16 16 0 00-16 16v40a16 16 0 0016 16zm0 160h416a16 16 0 0016-16v-40a16 16 0 00-16-16H16a16 16 0 00-16 16v40a16 16 0 0016 16z"
            />
          </svg>
        </BurgerIcon>
      ) : (
        <BurgerIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="58"
            viewBox="0 0 76 58"
            fill="none"
          >
            <defs />
            <path d="M76 29a4 4 0 01-4 4H13.6l18.1 18.2a4 4 0 010 5.7 4 4 0 01-2.8 1.1c-1 0-2.1-.4-2.8-1.2l-24.9-25a3.9 3.9 0 010-5.6l24.9-25a4 4 0 015.7 0 4 4 0 010 5.7L13.6 25H72a4 4 0 014 4z" />
          </svg>
        </BurgerIcon>
      )}
    </Wrapper>
  );
};

export default Burger;
