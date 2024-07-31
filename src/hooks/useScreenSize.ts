import { useEffect, useState } from "react";

// Custom hook to track screen size
export const useScreenSize = () => {
  // Initialize state with current window dimensions
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handler function to update state with new window dimensions
    const handler = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handler);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return screenSize;
};
