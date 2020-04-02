import { useEffect } from "preact/hooks";

export default function useClickOutside(onClickOutside, targetRef) {
  useEffect(() => {
    const clickListener = event => {
      const isClickOutside = !targetRef.current.contains(event.target);

      if (isClickOutside) {
        onClickOutside();
      }
    };
    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [onClickOutside, targetRef]);
}
