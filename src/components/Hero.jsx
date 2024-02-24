'use client';

import { Icon } from '@iconify/react';

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <div className="h-lvh text-8xl flex flex-col justify-center items-center leading-tight">
      <div className="flex">
        <div>
          <div className="flex justify-end">
            <span className="pr-5 -mt-3">
              <div className="inline-flex justify-center items-center inline-icons bg-ramosGrey rounded-full">
                <Icon
                  icon="ph:lightning-fill"
                  width="40"
                  height="40"
                  className="text-ramosOrange"
                />
              </div>
              <div className="inline-flex justify-center items-center inline-icons bg-ramosOrange rounded-full -ml-5">
                <Icon
                  icon="fe:line-chart"
                  width="40"
                  height="40"
                  className="text-white"
                />
              </div>
            </span>
            <p>Analytics</p>
          </div>
          <p className="text-left pr-10">
            that <span className="opacity-30">helps</span> you
          </p>
        </div>
        <div className="relative">
          <div className="inline-flex justify-center items-center h-10 w-10 absolute -top-3 left-7 bg-ramosOrange rounded-full">
            <Icon
              icon="ph:play-fill"
              width="20"
              height="20"
              className="text-white"
            />
          </div>
          <img
            src="/img/small-laptop.png"
            alt=""
            width={350}
            className="ml-10"
          />
        </div>
      </div>
      <div>
        <div>
          shape
          <div className="inline-flex justify-center items-center inline-icons bg-ramosYellow rounded-full mx-3">
            <Icon icon="mi:bar-chart-alt" width="40" height="40" />
          </div>
          the future
        </div>
      </div>
    </div>
  );
};

export default Hero;
