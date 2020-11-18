import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <About className="about">
      <Description>
        <div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          dolorem, ipsa minus ducimus corporis reprehenderit non tempore est
          atque nihil.
        </p>
        <button>Contact</button>
      </Description>
      <Image className="img">
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
}

export default AboutSection;
