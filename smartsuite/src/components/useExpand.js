import { useState, useEffect } from "react";

export const useExpand = () => {
  const [expand, setExpand] = useState(window.innerWidth < 768 ? 0 : 1); // Start collapsed on smaller screens

  const toggleExpand = () => {
    setExpand((prevExpand) => (prevExpand === 0 ? 1 : 0));
  };

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setExpand(1); // Keep expanded on tablet and larger
      } else {
        setExpand(0); // Collapse on smaller screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { expand, toggleExpand };
};
