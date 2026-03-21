const premiumEase = [0.21, 0.45, 0.27, 0.9] as const;

export const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: premiumEase,
    },
  },
};

export const heroTransition = {
  duration: 0.8,
  ease: premiumEase,
};
