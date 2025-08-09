/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import AboutBg from "../../img/aboutBg.png";

const AboutInfo = () => (
  <div css={styles} className="aboutInfo">
    <div className="aboutDesc">
<<<<<<< HEAD
      <span>ABOUT DREAMAGE AWARDS</span>
      <p>
      The Dreamage Accolades Awards Concert (DAAC) is an annual,
       high-profile event held across Central Nigeria. Established to honour
        and celebrate outstanding individuals from Nigeria and the diaspora. 
        DAAC recognizes excellence in various spheres of life — from entrepreneurship and philanthropy 
        to creativity and leadership. More than just an award ceremony, DAAC serves as a powerful platform to inspire, mentor, and uplift the next generation, while actively supporting orphans and underprivileged children. Awardees are selected through a nomination process that includes submissions from the public as well as from DAAC organizers and founders.

      </p>
=======
      <span>ABOUT CONFERENCE</span>
      <h2>WELCOME TO THE PROJECT MANAGEMENT</h2>
      <p>
        The Project Management is a platform to learn expert techniques for
        building successful project teams, creating efficient plans and
        implementing effective tracking measures to ensure your projects come in
        on deadline and on budget. In one fast-paced, well-designed day, we’ll
        cover all the essential elements of project management.
      </p>
      <Button btnTitle="Interested" />
>>>>>>> f6e17d3 (ready)
    </div>
    <img src={AboutBg} alt="about" />
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .aboutDesc {
    width: 100%;
    max-width: 520px;
    color: #fff;
    span {
      color: #df42b1;
      border-bottom: 2px solid #4b4d7b;
    }
    h2 {
      font-size: 40px;
      line-height: 1.2;
      margin: 26px 0;
    }
    p {
      font-size: 15px;
      line-height: 1.8;
    }
    .btn {
      margin: 64px 0 0 0;
    }
  }
  @media (max-width: 876px) {
    flex-direction: column;
    img {
      margin: 50px 0 0 0;
      max-width: 94%;
    }
    .aboutDesc {
      h2 {
        font-size: 30px;
      }
      .btn {
        margin: 20px 0 0 0;
      }
    }
  }
  @media (min-width: 877px) and (max-width: 1120px) {
    .aboutDesc,
    img {
      max-width: 48%;
    }
    .aboutDesc {
      h2 {
        font-size: 28px;
      }
    }
  }
`;

export default AboutInfo;
