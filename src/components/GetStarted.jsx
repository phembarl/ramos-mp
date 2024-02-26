/* eslint-disable @next/next/no-img-element */
import React from 'react';

const GetStarted = () => {
  return (
    <section className="mt-10 p-5 text-center">
      <div className="flex justify-center">
        <div className="bg-ramosOrange p-8 rounded-3xl shadow-lg">
          <img src="img/logo-white.png" alt="logo" width={60} />
        </div>
      </div>
      <p className="text-8xl mb-8 font-medium">Get started</p>
      <p className="max-w-96 mx-auto text-gray-400 text-xl">
        Turn information into advantage! Start using Ramos today. Sign up for a
        free trial
      </p>

      <div className="flex justify-center space-x-3 mt-10">
        <button className="bg-ramosGrey py-2 px-8 rounded-lg text-sm">
          Request a demo
        </button>

        <button className="bg-ramosOrange py-2 px-8 rounded-lg text-sm text-white">
          Start for free
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
