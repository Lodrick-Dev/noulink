import { useLocation, useNavigate } from "react-router-dom";
import {
  IoDocumentTextOutline,
  IoReceiptOutline,
  IoShieldCheckmarkOutline,
  IoChevronForward,
} from "react-icons/io5";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useLegal } from "../../Context/LegalContext";

export default function LegalUpdateModal() {
  const navigate = useNavigate();

  const { needsLegalUpdate, openLegalDocument, acceptLegalUpdate } = useLegal();

  const openCGU = () => {
    openLegalDocument();
    navigate("/cgu");
  };

  const openCGV = () => {
    openLegalDocument();
    navigate("/cgv");
  };

  const openPrivacy = () => {
    openLegalDocument();
    navigate("/politique-confidentialite");
  };

  const location = useLocation();

  const legalRoutes = ["/cgu", "/cgv", "/politique-confidentialite"];

  if (!needsLegalUpdate || legalRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <Overlay>
      <Modal>
        <Content>
          <IconContainer>
            <IoDocumentTextOutline size={34} color={COLORS.second} />
          </IconContainer>

          <Title>Mise à jour des documents</Title>

          <Description>Nos documents légaux ont été mis à jour.</Description>

          <Description>
            Avant de continuer à utiliser Nou Link, nous vous invitons à
            consulter les documents suivants :
          </Description>

          <Links>
            <DocumentButton onClick={openCGU}>
              <IoDocumentTextOutline size={20} color={COLORS.second} />

              <DocumentText>Conditions Générales d'Utilisation</DocumentText>

              <IoChevronForward size={20} color={COLORS.second} />
            </DocumentButton>

            <DocumentButton onClick={openCGV}>
              <IoReceiptOutline size={20} color={COLORS.second} />

              <DocumentText>Conditions Générales de Vente</DocumentText>

              <IoChevronForward size={20} color={COLORS.second} />
            </DocumentButton>

            <DocumentButton onClick={openPrivacy}>
              <IoShieldCheckmarkOutline size={20} color={COLORS.second} />

              <DocumentText>Politique de confidentialité</DocumentText>

              <IoChevronForward size={20} color={COLORS.second} />
            </DocumentButton>
          </Links>

          <Info>
            En continuant, vous confirmez avoir pris connaissance des documents
            mis à jour.
          </Info>

          <AcceptButton onClick={acceptLegalUpdate}>
            <AcceptText>J'ai lu et j'accepte</AcceptText>
          </AcceptButton>
        </Content>
      </Modal>
    </Overlay>
  );
}

/* =========================
   Styled Components
========================= */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 520px;
  max-height: 85vh;

  background: ${COLORS.white};
  border-radius: 24px;

  overflow: hidden;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  padding: 24px;
  max-height: 85vh;
  overflow-y: auto;

  /* Scrollbar */
  scrollbar-width: thin;
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;

  border-radius: 50%;

  background: rgba(39, 142, 165, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto 16px;
`;

const Title = styled.h2`
  margin: 0 0 14px;

  font-size: 22px;
  font-weight: 700;

  color: ${COLORS.main};

  text-align: center;
`;

const Description = styled.p`
  margin: 0 0 10px;

  font-size: 15px;
  line-height: 22px;

  color: ${COLORS.black};
`;

const Links = styled.div`
  margin-top: 10px;
  margin-bottom: 18px;
`;

const DocumentButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 14px 0;

  background: transparent;
  border: none;
  border-bottom: 1px solid #eee;

  cursor: pointer;

  text-align: left;

  transition: background 0.2s ease;

  &:hover {
    background: rgba(39, 142, 165, 0.04);
  }
`;

const DocumentText = styled.span`
  flex: 1;

  margin-left: 10px;
  margin-right: 8px;

  font-size: 14px;
  font-weight: 600;

  color: ${COLORS.main};
`;

const Info = styled.p`
  margin: 0 0 20px;

  font-size: 13px;
  line-height: 19px;

  color: #666;
`;

const AcceptButton = styled.button`
  width: 100%;
  height: 52px;

  border: none;
  border-radius: 14px;

  background: ${COLORS.second};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.1s ease;

  &:hover {
    opacity: 0.92;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const AcceptText = styled.span`
  color: ${COLORS.white};

  font-size: 16px;
  font-weight: 700;
`;
