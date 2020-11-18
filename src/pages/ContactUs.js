import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

function ContactUs() {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
}

export default ContactUs;
