/* eslint-disable @next/next/no-img-element */
'use client';

import {
  revealVariants,
  revealVariants2,
  revealVariantsLeft,
  revealVariantsRight,
  scaleVariants,
} from '@/helpers/variants';
import { Icon } from '@iconify/react';
import ProgressBar from '@ramonak/react-progress-bar';
import { motion } from 'framer-motion';
import Counter from './Counter';

const Strategic = () => {
  return (
    <section className="bg-ramosGrey strategic-section p-20">
      <div>
        <div className="flex justify-between items-baseline">
          <motion.p
            className="font-medium text-4xl"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Your key to strategic <br /> success through analytics
          </motion.p>
          <motion.p
            className="text-lg"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready for exciting, instantaneous, <br /> all-accessible insights in
            real time?
          </motion.p>
        </div>

        <div className="mt-20 flex space-x-5">
          <div className="bg-white rounded-ramos flex pt-8 shadow-sm overflow-hidden">
            <div className="p-8 pt-0">
              <motion.button
                className="bg-ramosYellow p-2 rounded-md mb-24"
                variants={scaleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Setting up reports
              </motion.button>

              <motion.p
                className="text-2xl font-medium"
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Fast and easy access to analytics
              </motion.p>

              <motion.p
                className="mt-5 text-gray-400"
                variants={revealVariants2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                One platform is a comprehensive system of solutions that will be
                the first step towards digitalization of your business
              </motion.p>
            </div>

            <div className="sales-stats border-l border-t w-full p-5">
              <p className="text-lg">Sales statistic</p>

              <motion.div
                className="flex space-x-5"
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex justify-center items-center">
                  <div className="bg-ramosOrange text-white w-12 h-12 rounded-full flex justify-center items-center mr-3">
                    <Icon
                      icon="heroicons:square-3-stack-3d"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Total profit</p>
                    <p>
                      $ <span className="font-medium text-3xl">264,2K</span>{' '}
                    </p>
                  </div>
                </div>
                <div className="bg-ramosGrey px-3 py-1 rounded-lg overflow-hidden">
                  <p className="font-medium">Visitors</p>

                  <ProgressBar
                    completed={14}
                    isLabelVisible={false}
                    height="3px"
                    bgColor="rgb(34 197 94)"
                    className="my-2"
                  />

                  <div className="font-medium text-3xl flex">
                    <p className="w-12">
                      <Counter from={15} to={56} after="K" />
                    </p>
                    <motion.div
                      className="w-4 h-4 rounded-full bg-green-500 text-white flex justify-center items-center ml-2 mr-1"
                      variants={revealVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Icon icon="ph:arrow-up-bold" width="10" height="10" />
                    </motion.div>

                    <motion.span
                      className="text-xs font-normal text-green-500"
                      variants={revealVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      +14%
                    </motion.span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="border rounded-ramos p-3 mt-5 relative"
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p>Visit statistics</p>

                <div>
                  <img src="img/line-chart.png" alt="line-chart" width={150} />
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400 flex space-x-5 text-xs">
                    <p>Jan</p>
                    <p>Feb</p>
                    <p>Mar</p>
                    <p>Apr</p>
                    <p>May</p>
                  </div>

                  <div className="w-24 p-2 bg-ramosOrange text-white rounded-lg absolute bottom-2 right-2">
                    <div className="flex justify-between mb-2">
                      <p className="text-xs">Rate</p>
                      <Icon
                        icon="mynaui:slash-hexagon"
                        width="18"
                        height="18"
                      />
                    </div>

                    <p className="ml-5 text-xl">
                      <Counter from={15} to={53} after="%" />
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="bg-ramosBlack p-8 text-white rounded-ramos px-20">
            <div className="flex justify-center space-x-5">
              <motion.div
                className="border flex flex-col justify-center items-center rounded-ramos w-36 h-36 border-gray-600 bg-zinc-900"
                variants={revealVariantsLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Icon
                  icon="heroicons:square-3-stack-3d"
                  width="30"
                  height="30"
                  className="text-ramosYellow mb-4"
                />

                <div className="flex">
                  <Icon
                    icon="guidance:user-1"
                    width="35"
                    height="35"
                    className="text-ramosYellow"
                  />
                  <Icon
                    icon="guidance:user-1"
                    width="35"
                    height="35"
                    className="text-ramosYellow -ml-3 bg-ramosBlack rounded-full"
                  />
                </div>
              </motion.div>

              <motion.div
                className="border p-5 rounded-ramos w-36 h-36 border-gray-600 bg-zinc-900"
                variants={revealVariantsRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs mb-4">Transactions</p>

                <div className="flex justify-end mb-2">
                  <div className="w-4 h-4 rounded-full bg-green-500 text-white flex justify-center items-center ml-2 mr-1">
                    <Icon icon="ph:arrow-up-bold" width="10" height="10" />
                  </div>

                  <span className="text-xs font-normal text-green-500">
                    +14%
                  </span>
                </div>

                <p className="text-4xl">
                  <Counter from={1} to={43} after="K" />
                </p>
              </motion.div>
            </div>

            <motion.div
              className="text-center mt-20"
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl mb-5">Widget Control</h3>
              <p className="text-sm text-gray-400">
                Reports provide a comprehensive overview of important aspects of
                web analytics
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 flex justify-center space-x-10">
          <p className="text-xl">
            Up to <span className="text-8xl font-medium">45%</span>
          </p>

          <motion.p
            className="w-1/3"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Increase your analytics efficiancy up to 45%. unique algorithms
            provide insights from data, reduce time for analysis ans save time
            for making important, informed decisions
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Strategic;
