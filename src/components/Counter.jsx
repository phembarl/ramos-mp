import { useState, useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';

const Counter = ({ from, to, before, after, ...rest }) => {
  const [displayValue, setDisplayValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let controls;
    if (isInView) {
      controls = animate(from, to, {
        duration: 2.5,
        ease: 'easeInOut',
        onUpdate: value => {
          setDisplayValue(Math.floor(value));
        },
      });
    }

    return () => {
      if (controls) {
        controls.stop();
      }
    };
  }, [isInView, from, to]);

  return (
    <motion.span ref={ref} {...rest}>
      {before}
      {displayValue.toLocaleString()}
      {after}
    </motion.span>
  );
};

export default Counter;
