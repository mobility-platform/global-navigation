import styled from "@emotion/styled-base";

export const NotificationIndicator = styled("div")(({ number }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  "&::before": {
    content: number ? `"${number}"` : "none",
    position: "absolute",
    top: 0,
    right: 0,
    padding: 0,
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    fontSize: "10px",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "16px",
    backgroundColor: "#fd7b6f",
    color: "#ffffff"
  }
}));
