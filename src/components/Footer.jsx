'use client';

import { revealVariants, scaleVariants } from '@/helpers/variants';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Footer = () => {
  return (
    <footer className="bg-ramosBlack text-white px-16 pt-20 pb-16 mt-20">
      <motion.div
        className="flex justify-between items-center border-b border-gray-300 pb-12"
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-xl text-gray-300 flex justify-between space-x-10">
          <a href="#">About</a>
          <a href="#">Why us</a>
          <a href="#">Platform</a>
          <a href="#">Pricing</a>
          <a href="#">Contacts</a>
        </div>
        <p className="text-5xl">hello@ramos.com</p>
      </motion.div>

      <motion.div
        className="flex justify-between pt-12"
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex space-x-16 text-sm leading-6">
          <div>
            <p>Raleigh</p>
            <p className="text-gray-400">
              125 N. Harrington StreetRaleigh <br /> NC 27603919 833 6413
            </p>
          </div>

          <div>
            <p>Charlotte</p>
            <p className="text-gray-400">
              220 East Peterson DriveCharlotte <br /> NC 28217704 333 7272
            </p>
          </div>
        </div>

        <div className="space-y-5 text-right text-lg">
          <div>
            <a href="#">LinkedIn</a>
          </div>
          <div>
            <a href="#">Instagram</a>
          </div>

          <div>
            <a href="#">Facebook</a>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-between items-center mt-8">
        <div>
          <AnimatedText
            el="span"
            text="Ramos&#174;"
            className="text-8xl text-[9rem] relative"
          />
        </div>

        <motion.div
          className="flex justify-between items-center space-x-52"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-gray-400">
            <a href="#">Privacy policy</a>
          </div>

          <div className="text-gray-400">
            <a href="#">Licence agreement</a>
          </div>

          <motion.div
            className="bg-white text-ramosBlack p-5 rounded-2xl"
            variants={scaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Icon icon="bi:qr-code" width="60" height="60" />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
