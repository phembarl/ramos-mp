'use client';

/* eslint-disable @next/next/no-img-element */

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const scaleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      delay: 0.8,
      duration: 1,
    },
  },
};

const rotateVariants = {
  hidden: { opacity: 0, rotate: 180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      ease: 'easeInOut',
      delay: 0.8,
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-lvh text-8xl flex flex-col justify-center items-center leading-tight font-medium">
      <div className="flex">
        <div>
          <div className="flex justify-end">
            <span className="pr-5 -mt-3">
              <motion.div
                className="inline-flex justify-center items-center inline-icons bg-ramosGrey rounded-full"
                variants={rotateVariants}
                initial="hidden"
                animate="visible"
              >
                <Icon
                  icon="ph:lightning-fill"
                  width="40"
                  height="40"
                  className="text-ramosOrange"
                />
              </motion.div>
              <motion.div
                className="inline-flex justify-center items-center inline-icons bg-ramosOrange rounded-full -ml-5"
                variants={rotateVariants}
                initial="hidden"
                animate="visible"
              >
                <Icon
                  icon="fe:line-chart"
                  width="40"
                  height="40"
                  className="text-white"
                />
              </motion.div>
            </span>
            <AnimatedText text="Analytics" />
          </div>
          <p className="text-left pr-10">
            <AnimatedText text="that" el="span" />
            <AnimatedText text="helps" el="span" className="opacity-30" />
            <AnimatedText text="you" el="span" />
          </p>
        </div>
        <div className="relative">
          <motion.div
            className="inline-flex justify-center items-center h-10 w-10 absolute -top-3 left-7 bg-ramosOrange rounded-full"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
          >
            <Icon
              icon="ph:play-fill"
              width="20"
              height="20"
              className="text-white"
            />
          </motion.div>
          <motion.img
            src="/img/small-laptop.png"
            alt=""
            width={350}
            className="ml-10"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
      </div>
      <div>
        <div>
          <AnimatedText text="shape" el="span" />
          <motion.div
            className="inline-flex justify-center items-center inline-icons bg-ramosYellow rounded-full mx-3"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
          >
            <Icon icon="mi:bar-chart-alt" width="40" height="40" />
          </motion.div>
          <AnimatedText text="the future" el="span" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
