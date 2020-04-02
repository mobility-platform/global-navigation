import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

/**
 * Custom icon component allowing insertion of raw HTML or DOM HTML elements
 */
const CustomIcon = ({ as: Component, content, ...props }) => {
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
    return <Component dangerouslySetInnerHTML={{ __html: content }} {...props} />;
  }
  return null;
};

export default CustomIcon;
