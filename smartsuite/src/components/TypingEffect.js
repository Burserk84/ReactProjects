import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const TypingEffect = ({
  text = "Welcome to SmartSuite from SharifiAslDev",
  delay = 100,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  // Function to type out each character recursively
  const typeCharacter = (index) => {
    if (index < text.length) {
      setDisplayedText((prev) => prev + text[index]);
      setTimeout(() => typeCharacter(index + 1), delay);
    }
  };

  // Start typing when the component is first rendered
  if (displayedText === "") {
    typeCharacter(0);
  }

  return (
    <div className="p-3" style={{ fontSize: "2.3em", margin: "10px 0 10px 0" }}>
      {displayedText}
    </div>
  );
};

export default TypingEffect;
