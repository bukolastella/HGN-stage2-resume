import { useEffect, useRef } from "react";

const useScroll = () => {
  const refspotlight = useRef();
  const revealSection = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.style.opacity = null;
    entry.target.style.transform = null;
    observer.unobserve(entry.target);
  };
  const sectionObs = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
  });
  useEffect(() => {
    sectionObs.observe(refspotlight.current);
  });
  return { refspotlight };
};

export default useScroll;
