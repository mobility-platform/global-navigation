import { setPragma, styled } from "goober";
import { h } from "preact";

setPragma(h);

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: '100%',
});

const TextWrapper = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  marginLeft: "10px"
});

const PrimaryText = styled("span")({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
});

const SecondaryText = styled("span")({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "12px",
  opacity: 0.8,
});

const AvatarItem = ({ children, primaryText, secondaryText }) => {
  return (
    <Wrapper>
      {children}
      <TextWrapper>
        <PrimaryText>{primaryText}</PrimaryText>
        <SecondaryText>{secondaryText}</SecondaryText>
      </TextWrapper>
    </Wrapper>
  );
};

export default AvatarItem;