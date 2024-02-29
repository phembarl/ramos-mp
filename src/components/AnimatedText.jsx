import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { textVariants } from '@/helpers/variants';

const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className,
  variants = textVariants,
}) => {
  return (
    <Wrapper className={`${className} overflow-hidden inline-flex`}>
      <motion.span
        transition={{ staggerChildren: 0.05 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {text.split(' ').map(word => (
          <span key={uuidv4()} className="inline-block">
            {word.split('').map(char => (
              <motion.span
                className="inline-block"
                key={uuidv4()}
                variants={variants}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
