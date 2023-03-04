import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const Accordion = ({ title, body }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled((prevState) => !prevState)}>
        The Heading
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            style={{ overflow: "hidden" }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <p>
              sdfkja; ewrqirj asdfnvcnl wkqrjlkj adfsdfjh ksalngbxc klajsdf iowe
              klasfjkl uib kd lwe alkdknv asdkkfwiu sdkadflkj bixc kadslkji wen
              kljdiuajn bcjhk jsaioed klalkdj iovklz lkiwehgkjad
              pibdkqlwkjehfdskjalk fkdl;kajsdlkfjoiwpe
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
