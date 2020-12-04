import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

function AboutSection() {
  return (
    <About className="about">
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          dolorem, ipsa minus ducimus corporis reprehenderit non tempore est
          atque nihil.
        </motion.p>
        <motion.a className="btn" variants={fade} href="/contact">
          Contact
        </motion.a>
        <div className="mt2"></div>
      </Description>
      <Image className="img">
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
}

export default AboutSection;
