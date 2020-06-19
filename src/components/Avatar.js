import styled from "@emotion/styled-base";
import { h } from "preact";

const AvatarWrapper = styled("div")(({ size }) => ({
  position: "relative",
  width: size,
  height: size,
  borderRadius: "50%",
  overflow: "hidden",
  img: {
    width: "100%"
  }
}));

const Avatar = ({ src, size }) => {
  return (
    <AvatarWrapper size={size}>
      <img src={src} alt="" />
    </AvatarWrapper>
  );
};

export default Avatar;
