import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--green)",
  "var(--purp)",
  "var(--black)",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };
  const index = wrap(0, COLORS.length, page);

  return (
    // use css to control
    <div style={{ position: "relative", height: 400 }}>
      <AnimatePresence custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            height: 400,
            width: "100%",
            background: COLORS[index],
            position: "absolute", // to let the square not under the previous one
            left: 0,
            top: 0,
          }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 400) {
              paginate(-1);
            } else if (offset.x < -400) {
              paginate(1);
            }
          }}
        />
      </AnimatePresence>
      <div style={{ zIndex: 10, position: "absolute" }}>
        <button onClick={() => paginate(-1)}>{"<"}</button>
        <button onClick={() => paginate(1)}>{">"}</button>
      </div>
    </div>
  );
};

export default Slideshow;
