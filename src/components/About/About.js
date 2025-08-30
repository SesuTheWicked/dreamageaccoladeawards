/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import AboutInfo from "./AboutInfo";
import AboutDate from "./AboutDate";

const About = () => (
  <section css={styles} className="about" id="about">
    <Container>
      <AboutInfo />
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <AboutDate />
>>>>>>> f6e17d3 (ready)
=======
>>>>>>> e5a744c (hello)
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  background: #151853;
  padding: 100px 0;
`;

export default About;
