import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

function MovieDetail() {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.find((movie) => movie.url === url);
    setMovie(currentMovie);
  }, [url, movies]);

  return (
    <>
      {movie && (
        <Details
          variants={PageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h1>{movie.title}</h1>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
}

const Details = styled(motion.div)`
  color: #fff;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 10vh;
  position: relative;
  font-size: 2rem;
  h1 {
    font-weight: lighter;
    margin-bottom: 2rem;
    text-align: center;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    text-align: center;
    padding-top: 5vh;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 2rem 5rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 2rem 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }

  p {
    padding: 2rem 0;
  }

  @media (max-width: 1300px) {
    padding: 1rem;
  }
`;

function Award({ title, description }) {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
}

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
