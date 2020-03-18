import styled from "@emotion/styled";
import { h, Fragment } from "preact";
import isTextLegibleOverBackground from "../utils/isTextLegibleOverBackground";

const Wrapper = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  width: "100%",
  padding: "8px",
  color: "currentColor",
  opacity: "0.8",
  borderTop: isTextLegibleOverBackground("#ffffff", theme.background)
    ? "1px solid rgba(255, 255, 255, .1)"
    : "1px solid rgba(0, 0, 0, .1)"
}));

const Link = styled("a")({
  display: "inline-block",
  textDecoration: "none",
  color: "currentColor",
  fontSize: "12px",
  "&:hover": {
    textDecoration: "underline"
  }
});

const InlineLinks = ({ data }) => {
  return (
    <Wrapper>
      {data &&
        data.map((link, index) => {
          const { label, ...rest } = link;
          return (
            <Fragment key={index}>
              {index === 0 ? null : <span>{` - `}</span>}
              <Link {...rest}>{label}</Link>
            </Fragment>
          );
        })}
    </Wrapper>
  );
};

export default InlineLinks;
