import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  open: { x: 0 },
  closed: {
    x: "-100%",
    transition: {
      delay: 0.2,
    },
  },
};

const ulVariants = {
  open: {
    scale: 1.05,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: -1, // 1 forwards, -1 backwards
      when: "afterChildren", // "afterChildren" "beforeChildren"
    },
  },
  closed: {
    scale: 1,
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    // transition: {
    //   delay: 0.2, // need to delay by them self
    // },
  },
  closed: {
    y: "-20px",
    opacity: 0,
  },
};

const links = ["one", "two", "three", "four"];

export const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 300 }}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>
      <motion.ul variants={ulVariants}>
        {links.map((link) => (
          <motion.li variants={liVariants} key={link}>
            <a href="#">{link}</a>
          </motion.li>
        ))}
      </motion.ul>
    </MenuNav>
  );
};

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0 0 1rem;
    font-size: 2rem;
    a {
      text-decoration: none;
      color: white;
      border-bottom: 2px transparent solid;
      transition: 0.3s ease border;
      &:hover {
        border-bottom: 2px var(--blue) solid;
      }
    }
  }
`;

export default Nav;
