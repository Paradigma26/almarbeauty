import React, { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const text = "Desarrollado por PurpleSky26";
  const [displayText, setDisplayText] = useState("");
  const [isShuffling, setIsShuffling] = useState(true);

  useEffect(() => {
    shuffleText();
  }, []);

  const shuffleText = () => {
    setIsShuffling(true);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let iterations = 0;
    const interval = setInterval(() => {
      const shuffled = text
        .split("")
        .map((char, i) => {
          if (i < iterations) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(shuffled);

      if (iterations >= text.length) {
        clearInterval(interval);
        setIsShuffling(false);
      }
      iterations += 1 / 2;
    }, 50);
  };

  return (
    <footer className="footer" onMouseEnter={() => !isShuffling && shuffleText()}>
      <p className="shuffle-text">{displayText}</p>
    </footer>
  );
}

export default Footer;
