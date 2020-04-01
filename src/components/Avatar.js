import styled from "@emotion/styled-base";
import { h } from "preact";

const Wrapper = styled("div")(({ size }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: size,
  height: size,
  borderRadius: "50%",
  overflow: "hidden"
}));

const Image = styled("img")({
  flex: 1
});

const Avatar = ({ src, size = "45px" }) => {
  return (
    <Wrapper size={size}>
      <Image src={src} />
    </Wrapper>
  );
};

export default Avatar;
