export const useResponsive = () => {
  const getWindowWidth = () => {
    return window.innerWidth;
  };

  const getIsMobile = (): boolean => {
    const width = getWindowWidth();
    if (width > 768) {
      return false;
    }
    return true;
  };

  return { getIsMobile };
};
