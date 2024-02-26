import ProgressBar from '@ramonak/react-progress-bar';
import { useInView, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const ProgressGroup = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [thirdNum, setThirdNum] = useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let controls;
    if (isInView) {
      controls = animate(0, 100, {
        ease: 'easeInOut',
        onUpdate: value => {
          setFirstNum(Math.floor(value));
        },
      });
    }
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      let controls;
      controls = animate(0, 100, {
        delay: 0.5,
        ease: 'easeInOut',
        onUpdate: value => {
          setSecondNum(Math.floor(value));
        },
      });
    }
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      let controls;
      controls = animate(0, 100, {
        delay: 1,
        ease: 'easeInOut',
        onUpdate: value => {
          setThirdNum(Math.floor(value));
        },
      });
    }
  }, [isInView]);

  return (
    <div className="flex space-x-[1px]" ref={ref}>
      <ProgressBar
        completed={firstNum}
        isLabelVisible={false}
        height="4px"
        bgColor="rgb(34 197 94)"
        className="my-2 w-1/3"
      />
      <ProgressBar
        completed={secondNum}
        isLabelVisible={false}
        height="4px"
        bgColor="#ffd027"
        className="my-2 w-1/3"
      />
      <ProgressBar
        completed={thirdNum}
        isLabelVisible={false}
        height="4px"
        bgColor="#a855f7"
        className="my-2 w-1/3"
      />
    </div>
  );
};

export default ProgressGroup;
