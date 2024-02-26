'use client';

import { Icon } from '@iconify/react';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import Counter from './Counter';
import {
  revealVariants,
  revealVariantsAlt,
  revealVariantsLeft,
  revealVariantsRight,
} from '@/helpers/variants';
import ProgressBarGroup from './ProgressBarGroup';

const fillVariants = {
  visible: {
    right: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const barVariants = {
  hidden: { height: 0 },
  visible: {
    height: '',
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const FullControl = () => {
  return (
    <motion.section className="mt-10 p-20">
      <div>
        <p className="text-8xl mb-10 font-medium">
          <AnimatedText text="We give you full" el="span" />
          <br />{' '}
          <AnimatedText text="control" el="span" className="opacity-30" />{' '}
          <AnimatedText text="over your data" el="span" />
        </p>
      </div>

      <div className="flex space-x-3">
        <div className="bg-ramosGrey pb-10 rounded-3xl w-1/2 overflow-hidden">
          <div className="pt-10 flex justify-center relative bg-ramosGrey bg-[linear-gradient(to_right,#e6e6e6_1px,transparent_1px),linear-gradient(to_bottom,#e6e6e6_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <motion.div
              className="bg-white p-10 text-center rounded-3xl flex flex-col justify-center items-center w-52 relative -right-4 shadow-md"
              variants={revealVariantsLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-sm mb-4">Conversion rate</p>
              <div className="text-center font-medium text-4xl p-5 rounded-2xl mb-4 relative overflow-hidden z-10">
                <div className="text-white">2.3%</div>
                <div className="absolute top-5 z-10">2.3%</div>
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-ramosYellow"
                  variants={fillVariants}
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </div>

              <p className="text-sm text-gray-400 w-24">
                Percentage of website visitors
              </p>
            </motion.div>

            <motion.div
              className="bg-white px-4 py-5 rounded-3xl border border-ramosGrey w-52 relative top-10 -left-4"
              variants={revealVariantsRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="font-medium text-xl mb-3">
                ${' '}
                <span className="text-3xl">
                  <Counter from={100} to={131} after="K" isDecimal />
                </span>
              </p>

              <ProgressBarGroup />

              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center space-x-1">
                  <Icon
                    icon="guidance:user-1"
                    width="30"
                    height="30"
                    className="text-gray-500"
                  />
                  <p className="text-xs text-gray-400">Min. price</p>
                </div>
                <div className="text-sm">1,200$</div>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center space-x-1">
                  <Icon
                    icon="guidance:user-1"
                    width="30"
                    height="30"
                    className="text-gray-500"
                  />
                  <p className="text-xs text-gray-400">Max. price</p>
                </div>
                <div className="text-sm">2,320$</div>
              </div>

              <div className="flex justify-between items-center pt-3 mt-10 border-t border-t-ramosGrey">
                <div className="text-xs text-gray-400">Engagement rate</div>
                <div className="text-sm">47.84%</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-20 flex flex-col justify-center items-center"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-medium text-xl mb-4">
              Improved customer service
            </p>
            <p className="text-sm max-w-96">
              Analytics helps optimize processes by providing information on how
              to improve interactions with customers and increase their
              satisfaction
            </p>
          </motion.div>
        </div>

        <div className="bg-ramosGrey pb-10 rounded-3xl w-1/2 overflow-hidden">
          <div className="pt-10 flex flex-col justify-center items-center relative bg-ramosGrey bg-[linear-gradient(to_right,#e6e6e6_1px,transparent_1px),linear-gradient(to_bottom,#e6e6e6_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <motion.div
              className="bg-white px-5 py-4 rounded-3xl h-20 w-7/12 absolute top-10"
              variants={revealVariantsAlt}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            <motion.div
              className="bg-white px-5 py-3 rounded-3xl h-40 w-8/12 border border-ramosGrey border-b-0 shadow-lg absolute top-16"
              variants={revealVariantsAlt}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-sm">Finance reports</p>
            </motion.div>
            <motion.div
              className="p-5 bg-white rounded-3xl h-56 shadow-lg w-9/12 border border-ramosGrey z-10 mt-16"
              variants={revealVariantsAlt}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-sm">Insights</p>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Total profit</p>
                    <p className="font-medium text-xl mb-3">
                      $ <span className="text-3xl">264.2K</span>{' '}
                    </p>

                    <button className="bg-ramosYellow p-2 rounded-md text-xs">
                      Data visualization
                    </button>
                  </div>

                  <div className="text-xs text-gray-400 flex justify-between items-end space-x-3">
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="bg-ramosGrey w-10 h-20 mb-3 rounded-md"
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                      <p>2021</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <motion.div
                        className="bg-ramosGrey w-10 h-10 mb-3 rounded-md"
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                      <p>2020</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <motion.div
                        className="bg-ramosGrey w-10 h-24 mb-3 rounded-md"
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                      <p>2019</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <motion.div
                        className="bg-ramosYellow w-10 h-32 mb-3 rounded-md"
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                      <p>2018</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <motion.div
                        className="bg-ramosGrey w-10 h-14 mb-3 rounded-md"
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                      <p>2017</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-20 flex flex-col justify-center items-center"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-medium text-xl mb-4">
              Monitoring key indicators
            </p>
            <p className="text-sm max-w-96">
              Analytics platforms allows businesses to track KPIs, an important
              tool for measuring success and achieving goals
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FullControl;
