import { RefObject, useCallback } from "react";

type UseScrollToTopProps = {
  rootRef: RefObject<HTMLDivElement>;
};

export const ScrollToComponent = ({ rootRef }: UseScrollToTopProps) => {
  const handleScroll = useCallback(() => {
    rootRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [rootRef]);

  return handleScroll;
};