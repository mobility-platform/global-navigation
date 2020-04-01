import styled from "@emotion/styled-base";
import { Fragment, h } from "preact";
import { useTranslation } from "../utils/i18n";
import CollapsedLink from "./CollapsedLink";

const BurgerWrapper = styled("button")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  width: "30px",
  height: "30px",
  border: "none",
  padding: "0",
  margin: "0",
  color: "currentColor",
  backgroundColor: "transparent",
  cursor: "pointer"
});

const BurgerIcon = styled("div")({
  position: "relative",
  display: "block",
  width: "22px",
  height: "22px",
  color: "currentColor",
  svg: {
    width: "22px",
    height: "22px",
    fill: "currentColor"
  }
});

const Burger = ({ handler, isCollapsed }) => {
  const t = useTranslation();
  return (
    <Fragment>
      {isCollapsed ? (
        <CollapsedLink
          as={"button"}
          style={{ border: "none", padding: 0 }}
          aria-label={t("Open the menu")}
          onClick={() => handler()}
        >
          <BurgerIcon>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </BurgerIcon>
        </CollapsedLink>
      ) : (
        <BurgerWrapper
          as={"button"}
          style={{ border: "none", padding: 0 }}
          aria-label={t("Close the menu")}
          onClick={() => handler()}
        >
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
        </BurgerWrapper>
      )}
    </Fragment>
  );
};

export default Burger;
