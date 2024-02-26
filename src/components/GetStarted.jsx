'use client';

/* eslint-disable @next/next/no-img-element */
import {
  revealVariants,
  scaleVariants,
  scaleVariantsAlt,
} from '@/helpers/variants';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const GetStarted = () => {
  return (
    <section className="mt-10 p-5 text-center">
      <div className="flex justify-center">
        <motion.div
          className="bg-ramosOrange p-8 rounded-3xl shadow-lg"
          variants={scaleVariantsAlt}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src="img/logo-white.png" alt="logo" width={60} />
        </motion.div>
      </div>
      <p className="text-8xl mb-8 font-medium">
        <AnimatedText text="Get started" el="span" />
      </p>
      <motion.p
        className="max-w-96 mx-auto text-gray-400 text-xl"
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Turn information into advantage! Start using Ramos today. Sign up for a
        free trial
      </motion.p>

      <div className="flex justify-center space-x-3 mt-10">
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
    </section>
  );
};

export default GetStarted;
