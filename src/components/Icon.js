import { useEffect, useRef } from "preact/hooks";
import { h } from "preact";

const Icon = ({ as: Component, content, ...props }) => {
  const iconRef = useRef();

  useEffect(() => {
    const icon = content;
    const container = iconRef.current;
    if (!container) {
      return;
    }
    container.appendChild(icon);
    return () => container.removeChild(icon);
  }, [content]);

  if (content instanceof HTMLElement) {
    return <Component ref={iconRef} {...props} />;
  }
  if (typeof content === "string") {
    return (
      <Component dangerouslySetInnerHTML={{ __html: content }} {...props} />
    );
  }
  if (process.env.NODE_ENV !== "production") {
    throw new Error(
      "Expected linkIcon to be an HTMLElement or an inline html markup."
    );
  }
  return null;
};

export default Icon;
