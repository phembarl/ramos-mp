/* eslint-disable @next/next/no-img-element */
'use client';

import { Icon } from '@iconify/react';
import ProgressBar from '@ramonak/react-progress-bar';

const Strategic = () => {
  return (
    <section className="bg-ramosGrey strategic-section p-20">
      <div className="flex justify-between items-baseline">
        <p className="font-medium text-4xl">
          Your key to strategic <br /> success through analytics
        </p>
        <p className="text-lg">
          Ready for exciting, instantaneous, <br /> all-accessible insights in
          real time?
        </p>
      </div>

      <div className="mt-20 flex space-x-5">
        <div className="bg-white rounded-ramos flex pt-8 shadow-sm">
          <div className="p-8 pt-0">
            <button className="bg-ramosYellow p-2 rounded-md mb-24">
              Setting up reports
            </button>

            <p className="text-2xl font-medium">
              Fast and easy access to analytics
            </p>
            <p className="mt-5 text-gray-400">
              One platform is a comprehensive system of solutions that will be
              the first step towards digitalization of your business
            </p>
          </div>

          <div className="sales-stats border-l border-t w-full p-5">
            <p className="text-lg">Sales statistic</p>

            <div className="flex space-x-5">
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
              <div className="bg-ramosGrey px-3 py-1 rounded-lg">
                <p className="font-medium">Visitors</p>

                <ProgressBar
                  completed={14}
                  isLabelVisible={false}
                  height="3px"
                  bgColor="rgb(34 197 94)"
                  className="my-2"
                />

                <div className="font-medium text-3xl flex">
                  <p>29K</p>

                  <div className="w-4 h-4 rounded-full bg-green-500 text-white flex justify-center items-center ml-2 mr-1">
                    <Icon icon="ph:arrow-up-bold" width="10" height="10" />
                  </div>

                  <span className="text-xs font-normal text-green-500">
                    +14%
                  </span>
                </div>
              </div>
            </div>

            <div className="border rounded-ramos p-3 mt-5 relative">
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
                    <Icon icon="mynaui:slash-hexagon" width="18" height="18" />
                  </div>

                  <p className="ml-5 text-xl">47%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-ramosBlack p-8 text-white rounded-ramos px-20">
          <div className="flex justify-center space-x-5">
            <div className="border flex flex-col justify-center items-center rounded-ramos w-36 h-36 border-gray-600 bg-zinc-900">
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
            </div>

            <div className="border p-5 rounded-ramos w-36 h-36 border-gray-600 bg-zinc-900">
              <p className="text-xs mb-4">Transactions</p>

              <div className="flex justify-end mb-2">
                <div className="w-4 h-4 rounded-full bg-green-500 text-white flex justify-center items-center ml-2 mr-1">
                  <Icon icon="ph:arrow-up-bold" width="10" height="10" />
                </div>

                <span className="text-xs font-normal text-green-500">+14%</span>
              </div>

              <p className="text-4xl">28K</p>
            </div>
          </div>

          <div className="text-center mt-20">
            <h3 className="text-xl mb-5">Widget Control</h3>
            <p className="text-sm text-gray-400">
              Reports provide a comprehensive overview of important aspects of
              web analytics
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center space-x-10">
        <p className="text-xl">
          Up to <span className="text-8xl font-medium">45%</span>
        </p>

        <p className="w-1/3">
          Increase your analytics efficiancy up to 45%. unique algorithms
          provide insights from data, reduce time for analysis ans save time for
          making important, informed decisions
        </p>
      </div>
    </section>
  );
};

export default Strategic;
