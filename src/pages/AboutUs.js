import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

function AboutUs() {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUs;
