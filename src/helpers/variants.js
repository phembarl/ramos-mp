export const navbarVariants = {
  hidden: { opacity: 0, top: '200px' },
  visible: {
    opacity: 1,
    top: 'initial',
    transition: {
      duration: 1,
    },
  },
};

export const navLogoVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const navVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const revealVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const revealVariantsAlt = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const revealVariants2 = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
};

export const revealVariants3 = {
  hidden: { opacity: 0, width: 0, scale: 0 },
  visible: {
    opacity: 1,
    width: '24rem',
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const revealVariantsLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const revealVariantsRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

export const scaleVariantsAlt = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};
