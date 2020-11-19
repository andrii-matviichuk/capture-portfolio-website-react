import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  PageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { Hide } from "../styles";

function OurWork() {
  return (
    <Work variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <Link to="/work/the-athlete">
          <motion.h2 variants={fade}>The Athlete</motion.h2>
        </Link>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <Link to="/work/the-racer">
          <motion.h2 variants={fade}>The Racer</motion.h2>
        </Link>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt="theracer" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <Link to="/work/the-racer">
          <motion.h2 variants={fade}>Good Times</motion.h2>
        </Link>
        <div className="line"></div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 8%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
