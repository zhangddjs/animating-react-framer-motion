import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import Modal from "./Modal";
import Accordion from "./Accordion";
import Nav from "./Nav";
import Squares from "./Squares";
import Slideshow from "./Slideshow";
import "./App.css";
import Menu from "./Menu";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0);
  const [isToggled, setToggle] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCardActive, setIsCardActive] = useState(true);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]); //坐标到-200或200，消失

  return (
    <motion.div
      initial={{ opacity: 0 }}
      // animate={{ opacity: [0, 1, 0, 1] }} key frame
      // transition={{ duration: 5, times: [0, 0.2, 0.3, 1] }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </Container>
      {/* <Container>
        <Slideshow></Slideshow>
        <Squares></Squares>
        x need to be string
        <h2>Super Cool</h2>

        <button onClick={() => setToggle(true)}>Toggle</button>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Modal isToggled={isToggled} setToggle={setToggle}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>
        <Accordion />
        <CardGrid>
          <Card
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              bottom: 100,
              right: 100,
            }}
            // whileHover={{ scale: [1.02, 0.8, 1.2] }}
            // whileTap={{ background: "var(--red)" }}
            style={{ background: "var(--purp)" }}
          >
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div
                exit={{ height: 0, overflow: "hidden", opacity: 0 }}
                transition={{ opacity: { duration: 0 } }} // instantly set opacity to 0
              >
                <Card
                  onDragEnd={(event, info) => {
                    // console.log(info.point.x);
                    if (Math.abs(info.point.x) > 200) {
                      setIsCardActive(false);
                    }
                  }}
                  drag="x"
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  style={{
                    x,
                    // opacity: isCardActive ? opacity : 0,  //not correct
                    opacity,
                    background: "var(--blue)",
                  }}
                >
                  <h3>Some card</h3>
                  <img src={blue} />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container> */}
    </motion.div>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
