import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/animation.module.scss";

export default function Animation({
  children,
  fadeFromRight = false,
  delay = 0,
  width = "100%",
  fadeFromBottom = false,
}) {
  const ref = useRef(null);

  const isInViewport = useIsInViewport(ref);
  // console.log("isInViewport: ", isInViewport);
  const [inView, setInView] = useState(false);

  // the purpose of many wrappers is to ensure that the containers
  // doesn't disappear when they are out of view
  useEffect(() => {
    if (isInViewport) setInView(isInViewport);
  }, [isInViewport]);

  return (
    <motion.div
      ref={ref}
      animate={inView && { opacity: 1, x: 0, y: 0 }}
      initial={{
        opacity: 0,
        x: fadeFromRight ? 200 : fadeFromBottom ? 0 : -200,
        y: fadeFromBottom ? 200 : 0,
      }}
      transition={{ duration: 1, delay: 0.5 + delay }}
      className={styles.motion}
      style={{ width: width }}
    >
      {children}
    </motion.div>
  );
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
