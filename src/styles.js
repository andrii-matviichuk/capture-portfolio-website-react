import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  padding: 5rem 10rem;
  color: #fff;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    text-align: center;
    .mt2 {
      margin-top: 2rem;
    }
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button,
    a {
      margin: 2rem 0 5rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }

  @media (max-width: 1300px) {
    img {
      max-width: 500px;
      max-height: 500px;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
