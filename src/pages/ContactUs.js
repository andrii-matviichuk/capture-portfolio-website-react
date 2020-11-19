import { motion } from "framer-motion";
import { PageAnimation, titleAnim } from "../animation";
import { Hide } from "../styles";
import styled from "styled-components";

function ContactUs() {
  return (
    <ContactStyle
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send us a message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send us an email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  min-height: 80vh;
  color: #fff;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 3rem;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #fff;
  @media (max-width: 1300px) {
    margin-bottom: 1rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #fff;
  @media (max-width: 1300px) {
    width: 2rem;
    height: 2rem;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
  @media (max-width: 1300px) {
    width: 100%;
    h2 {
      margin: 1rem;
    }
  }
`;

export default ContactUs;
