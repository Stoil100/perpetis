import { useState, useEffect } from 'react';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
        return
    }
    // Function to check the window width
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Run the function on mount
    checkWidth();

    // Add a resize event listener
    window.addEventListener('resize', checkWidth);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
