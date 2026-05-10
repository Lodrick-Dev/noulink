import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Slide } from "react-awesome-reveal";
import Faq from "../../components/FAQ/faq";
import AbonnementCard from "../../components/AbonnementCard/AbonnementCard";
import Intro from "./Intro";
import HowItWorks from "./HowItWorks";
import NewsletterWaitlist from "./NewsletterWaitlist";
import Story from "./Story";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <section className="hero">
        <Intro />
      </section>
      <Slide direction="up" triggerOnce>
        <div className="story-landing">
          <Story />
        </div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <HowItWorks />
      </Slide>
      <div className="car-ab">
        <Slide direction="up" triggerOnce>
          <AbonnementCard />
        </Slide>
      </div>
      <Slide direction="up" triggerOnce>
        <Faq />
      </Slide>
      <div className="compo-letters">
        <Slide direction="up" triggerOnce>
          <NewsletterWaitlist />
        </Slide>
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;

const StyledLandingPage = styled.section`
  color: ${COLORS.white};
  position: relative;
  background: ${COLORS.main};
  .hero {
    /* padding: 50px 0px; */
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    height: 100svh;
    background: url("/assets/imgbg11.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .story-landing {
    height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("/assets/img1.png") center/cover no-repeat;
  }
  /* .section-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 10px;
    width: 80%;
    margin: 50px auto;
    h3 {
      font-size: 2rem;
    }
    > p {
      margin-top: 20px;
      text-align: center;
      > strong {
        color: ${COLORS.main};
      }
    }
  } */
  .car-ab {
    background: ${COLORS.second};
    padding: 50px 20px;
  }
  @media (max-width: 450px) {
    .hero {
      height: 90svh;
      background: url("/assets/imgbg11.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .story-landing {
      height: auto;
    }
    /* .section-2 {
      width: 90%;
      h3 {
        font-size: 2em;
        text-align: center;
      }
    } */
  }
`;
