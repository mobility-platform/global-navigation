import { useState, useCallback } from "preact/hooks";

export default function useDisclosure(initialState) {
  const [isOpen, setIsOpen] = useState(initialState);
  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const onToggle = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);
  return { isOpen, onOpen, onClose, onToggle };
}
