'use client';

import { Icon } from '@iconify/react';
import ProgressBar from '@ramonak/react-progress-bar';

const FullControl = () => {
  return (
    <section className="mt-10 p-20">
      <div>
        <p className="text-8xl mb-10 font-medium">
          We give you full <br /> <span className="opacity-30">control</span>{' '}
          over your data
        </p>
      </div>

      <div className="flex space-x-3">
        <div className="bg-ramosGrey pb-10 rounded-3xl w-1/2 overflow-hidden">
          <div className="pt-10 flex justify-center relative bg-ramosGrey bg-[linear-gradient(to_right,#e6e6e6_1px,transparent_1px),linear-gradient(to_bottom,#e6e6e6_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="bg-white p-10 text-center rounded-3xl flex flex-col justify-center items-center w-52 relative -right-4 shadow-md">
              <p className="text-sm mb-4">Conversion rate</p>
              <div className="bg-ramosYellow text-center font-medium text-4xl p-5 rounded-2xl mb-4">
                2.3%
              </div>

              <p className="text-sm text-gray-400 w-24">
                Percentage of website visitors
              </p>
            </div>

            <div className="bg-white px-4 py-5 rounded-3xl border border-ramosGrey w-52 relative top-10 -left-4">
              <p className="font-medium text-xl mb-3">
                $ <span className="text-3xl">131.2K</span>
              </p>

              <div className="flex space-x-[1px]">
                <ProgressBar
                  completed={100}
                  isLabelVisible={false}
                  height="4px"
                  bgColor="rgb(34 197 94)"
                  className="my-2 w-1/3"
                />
                <ProgressBar
                  completed={100}
                  isLabelVisible={false}
                  height="4px"
                  bgColor="#ffd027"
                  className="my-2 w-1/3"
                />
                <ProgressBar
                  completed={100}
                  isLabelVisible={false}
                  height="4px"
                  bgColor="#a855f7"
                  className="my-2 w-1/3"
                />
              </div>

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
            </div>
          </div>

          <div className="text-center mt-20 flex flex-col justify-center items-center">
            <p className="font-medium text-xl mb-4">
              Improved customer service
            </p>
            <p className="text-sm max-w-96">
              Analytics helps optimize processes by providing information on how
              to improve interactions with customers and increase their
              satisfaction
            </p>
          </div>
        </div>

        <div className="bg-ramosGrey pb-10 rounded-3xl w-1/2 overflow-hidden">
          <div className="pt-10 flex flex-col justify-center items-center relative bg-ramosGrey bg-[linear-gradient(to_right,#e6e6e6_1px,transparent_1px),linear-gradient(to_bottom,#e6e6e6_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="bg-white px-5 py-4 rounded-t-3xl w-7/12" />

            <div className="bg-white px-5 py-3 rounded-t-3xl w-8/12 border border-ramosGrey border-b-0 shadow-lg">
              <p className="text-sm">Finance reports</p>
            </div>
            <div className="p-5 bg-white rounded-3xl h-56 shadow-lg w-9/12 border border-ramosGrey">
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
                      <div className="bg-ramosGrey w-10 h-20 mb-3 rounded-md" />
                      <p>2021</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="bg-ramosGrey w-10 h-10 mb-3 rounded-md" />
                      <p>2020</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="bg-ramosGrey w-10 h-24 mb-3 rounded-md" />
                      <p>2019</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="bg-ramosYellow w-10 h-32 mb-3 rounded-md" />
                      <p>2018</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="bg-ramosGrey w-10 h-14 mb-3 rounded-md" />
                      <p>2017</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20 flex flex-col justify-center items-center">
            <p className="font-medium text-xl mb-4">
              Monitoring key indicators
            </p>
            <p className="text-sm max-w-96">
              Analytics platforms allows businesses to track KPIs, an important
              tool for measuring success and achieving goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullControl;
