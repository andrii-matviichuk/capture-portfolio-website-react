import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Nav() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 1300px)" });
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/" ? (isMobile ? "100%" : "50%") : "0%",
            }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/work" ? (isMobile ? "100%" : "50%") : "0%",
            }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width:
                pathname === "/contact" ? (isMobile ? "100%" : "50%") : "0%",
            }}
          />
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 3;
  a {
    color: #fff;
    text-decoration: none;
  }

  #logo {
    font-family: "Lobster", sans-serif;
    font-size: 1.5rem;
    font-weight: lighter;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    flex-direction: column;
    padding: 1rem;
    ul {
      justify-content: space-around;
      width: 100%;
      padding: 1rem 0;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  position: absolute;
  width: 0%;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
