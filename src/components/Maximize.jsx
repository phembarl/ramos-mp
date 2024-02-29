'use client';

import { Icon } from '@iconify/react';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import {
  revealVariants,
  revealVariants3,
  scaleVariants,
} from '@/helpers/variants';

const jumbotronVariants = {
  animate: {
    x: [15, -350],
    transition: { repeat: Infinity, duration: 5 },
  },
};

const Maximize = () => {
  return (
    <section className="mt-10 p-20">
      <p className="text-8xl mb-10 font-medium leading-tight">
        <AnimatedText el="span" text="Maximize" />{' '}
        <span className="opacity-30">
          <AnimatedText el="span" text="efficiency" />
        </span>{' '}
        <br />
        <AnimatedText el="span" text="with our intuitive" />
      </p>

      <div className="flex justify-between pb-16 border-ramosGrey border-b-2">
        <div className="flex">
          <motion.div
            className="bg-ramosGrey w-32 h-32 rounded-full flex justify-center items-center relative -mr-5 z-10"
            variants={scaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-white bg-ramosOrange rounded-lg p-2 z-10">
              <Icon icon="mingcute:heartbeat-line" width="30" height="30" />
            </div>
            <div className="border-t border-ramosOrange border-dotted absolute left-4 right-4" />
          </motion.div>

          <motion.div
            className="bg-ramosYellow text-black w-32 h-32 rounded-full flex flex-col justify-center items-center relative text-center"
            variants={scaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-semibold text-2xl">+30%</p>
            <p className="text-xs">Speed up your productivity</p>
          </motion.div>
        </div>
        <motion.div
          className="jumbotron bg-ramosYellow py-5 text-8xl overflow-hidden rounded-3xl whitespace-nowrap"
          variants={revealVariants3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={jumbotronVariants} animate="animate">
            Analytics service
          </motion.p>
        </motion.div>
      </div>

      <div className="flex justify-between mt-16">
        <motion.p
          className="w-1/2"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Explore traffic sources, page behaviour, conversions and more to gain
          deep insight into your audience. With us, your business doesn&apos;t
          just adapt - it evolves
        </motion.p>

        <div className="flex space-x-3">
          <motion.button
            className="bg-ramosGrey py-2 px-8 rounded-lg text-sm"
            variants={scaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Request a demo
          </motion.button>

          <motion.button
            className="bg-ramosOrange py-2 px-8 rounded-lg text-sm text-white"
            variants={scaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Start for free
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Maximize;
