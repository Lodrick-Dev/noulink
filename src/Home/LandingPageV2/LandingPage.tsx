import styled from "styled-components";
import LandingHeader from "./LandingHeader";
import LandingHero from "./LandingHero";
import DiscoverSection from "./DiscoverSection";
import StepsSection from "./StepsSection";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import CommunitySection from "./CommunitySection";
import PricingSection from "./PricingSection";
import QuestionsSection from "./QuestionsSection";
import FinalCta from "./FinalCta";
import COLORS from "../../Styles/Styles";

const LandingPage = () => (
  <Page>
    <LandingHeader />
    <main>
      <LandingHero />
      <DiscoverSection />
      <StepsSection />
      <DownloadApp />
      <CommunitySection />
      <PricingSection />
      <QuestionsSection />
      <FinalCta />
    </main>
  </Page>
);

export default LandingPage;

const Page = styled.div`
  overflow: hidden;
  background: ${COLORS.Fond};
  color: ${COLORS.Texte};
  font-family: "Poppins", "Nunito", sans-serif;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
  }

  button {
    font: inherit;
  }
`;
