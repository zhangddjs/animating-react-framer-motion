import React, { useState } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--green)",
  "var(--purp)",
  "var(--black)",
];

const Squares = () => {
  const [colorsList, setColorsList] = useState(COLORS);
  return (
    <div>
      <button onClick={() => setColorsList(shuffle(colorsList))}>
        Shuffle
      </button>
      {colorsList.map((color) => (
        <motion.div
          key={color}
          //   transition={{        //not working
          //     damping: 100,
          //     stiffness: 10,
          //   }}
          positionTransition={{
            damping: 100,
            stiffness: 10,
          }}
          style={{
            background: color,
            height: 100,
            width: 100,
          }}
        />
      ))}
    </div>
  );
};

export default Squares;
