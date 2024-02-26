'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  navLogoVariants,
  navVariants,
  navbarVariants,
} from '@/helpers/variants';

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-between items-center bg-black text-white pl-6 pr-3 py-2 navbar absolute left-10 right-10 overflow-hidden"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href="#"
        className="font-semibold text-lg flex"
        variants={navLogoVariants}
      >
        <Image
          src="/img/brand-icon.png"
          alt="brand-icon"
          width={25}
          height={25}
        />
        <span>ramos</span>
      </motion.a>
      <motion.ul
        className="flex justify-between space-x-10 text-sm bg-neutral-800 p-4 inner-nav"
        variants={navVariants}
      >
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Reports</a>
        </li>
        <li>
          <a href="#">Documents</a>
        </li>
        <li>
          <a href="#">History</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </motion.ul>

      <motion.button
        className="text-black bg-white px-10 py-4 text-sm nav-btn"
        variants={navVariants}
      >
        Sign Up
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
