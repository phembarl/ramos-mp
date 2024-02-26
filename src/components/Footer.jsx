'use client';

import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="bg-ramosBlack text-white px-16 pt-20 pb-16 mt-20">
      <div className="flex justify-between items-center border-b border-gray-300 pb-12">
        <div className="text-xl text-gray-300 flex justify-between space-x-10">
          <a href="#">About</a>
          <a href="#">Why us</a>
          <a href="#">Platform</a>
          <a href="#">Pricing</a>
          <a href="#">Contacts</a>
        </div>
        <p className="text-5xl">hello@ramos.com</p>
      </div>

      <div className="flex justify-between pt-12">
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
      </div>

      <div className="flex justify-between items-center">
        <div className="text-[9rem]">
          Ramos<span className="text-8xl -top-10 relative">&#174;</span>
        </div>

        <div className="flex justify-between items-center space-x-52">
          <div className="text-gray-400">
            <a href="#">Privacy policy</a>
          </div>

          <div className="text-gray-400">
            <a href="#">Licence agreement</a>
          </div>

          <div className="bg-white text-ramosBlack p-5 rounded-2xl">
            <Icon icon="bi:qr-code" width="60" height="60" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
