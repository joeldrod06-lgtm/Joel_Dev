const premiumEase = [0.21, 0.45, 0.27, 0.9] as const;

export function getSectionVariants(isMobile: boolean) {
  return {
    hidden: { opacity: 0, y: isMobile ? 16 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.6,
        ease: premiumEase,
      },
    },
  };
}

export function getHeroTransition(isMobile: boolean) {
  return {
    duration: isMobile ? 0.35 : 0.8,
    ease: premiumEase,
  };
}
