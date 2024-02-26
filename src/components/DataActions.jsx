'use client';

import { useState } from 'react';
import { revealVariants } from '@/helpers/variants';
import DataAction from './DataAction';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import AnimatedText from './AnimatedText';

/* eslint-disable @next/next/no-img-element */
const DataActions = () => {
  const [actions] = useState([
    'Instant Insights',
    'AI Technology',
    'Easy Integration',
  ]);

  const actionsVariants = {
    hidden: { opacity: 0, y: 100, marginBottom: '-1rem' },
    visible: i => ({
      opacity: 1,
      y: 0,
      marginBottom: '2rem',
      transition: { delay: 0.09 * i, ease: 'easeInOut', duration: 1 },
    }),
  };

  return (
    <section className="bg-ramosGrey rounded-ramos p-20 pr-0 pb-40 relative overflow-hidden">
      <div className="flex justify-between">
        <div className="z-10">
          <motion.p
            className="font-medium text-4xl mb-28"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Turning data into real <br /> actions and ideas.
          </motion.p>

          <motion.ul>
            {actions.map((a, i) => (
              <motion.li
                key={uuidv4()}
                // className={style.skillListItem}
                variants={actionsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <DataAction title={a} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          className="z-10"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src="img/phone-laptop.png" alt="" width={800} />
        </motion.div>
      </div>

      <AnimatedText
        text="Ramos"
        className="ramos-big text-ramosOrange font-bold absolute -bottom-28 bg-ramosGrey bg-[linear-gradient(to_left,#e6e6e6_1px,transparent_1px),linear-gradient(to_top,#e6e6e6_1px,transparent_1px)] bg-[size:6rem_4rem]"
      />
    </section>
  );
};

export default DataActions;
