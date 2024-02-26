'use client';

import { Icon } from '@iconify/react';

const Maximize = () => {
  return (
    <section className="mt-10 p-20">
      <p className="text-8xl mb-10 font-medium">
        Maximize <span className="opacity-30">efficiency</span> <br /> with our
        intuitive
      </p>

      <div className="flex justify-between pb-16 border-ramosGrey border-b-2">
        <div className="flex">
          <div className="bg-ramosGrey w-32 h-32 rounded-full flex justify-center items-center relative -mr-5 z-10">
            <div className="text-white bg-ramosOrange rounded-lg p-2 z-10">
              <Icon icon="mingcute:heartbeat-line" width="30" height="30" />
            </div>
            <div className="border-t border-ramosOrange border-dotted absolute left-4 right-4" />
          </div>

          <div className="bg-ramosYellow text-black w-32 h-32 rounded-full flex flex-col justify-center items-center relative text-center">
            <p className="font-semibold text-2xl">+30%</p>
            <p className="text-xs">Speed up your productivity</p>
          </div>
        </div>
        <div className="jumbotron bg-ramosYellow w-96 py-5 text-8xl overflow-hidden rounded-3xl whitespace-nowrap">
          <p>Analytics service</p>
        </div>
      </div>

      <div className="flex justify-between mt-16">
        <p className="w-1/2">
          Explore traffic sources, page behaviour, conversions and more to gain
          deep insight into your audience. With us, your business doesn&apos;t
          just adapt - it evolves
        </p>

        <div className="flex space-x-3">
          <button className="bg-ramosGrey py-2 px-8 rounded-lg text-sm">
            Request a demo
          </button>

          <button className="bg-ramosOrange py-2 px-8 rounded-lg text-sm text-white">
            Start for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Maximize;
