import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";

type FeedbackResponse = {
  message?: string;
  galerie?: string[];
};

type FeedbackImageProps = {
  src: string;
  alt: string;
  loading: "eager" | "lazy";
};

const FeedbackImage = ({ src, alt, loading }: FeedbackImageProps) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );

  return (
    <ImageWrapper>
      {status === "loading" && <ImagePlaceholder aria-hidden="true" />}
      {status === "error" ? (
        <ImageFallback role="img" aria-label="Image de retour indisponible">
          Image indisponible
        </ImageFallback>
      ) : (
        <Image
          $loaded={status === "loaded"}
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </ImageWrapper>
  );
};

const Feedback = () => {
  const [feedback, setFeedback] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector("article");

    if (!carousel || !card) {
      return;
    }

    carousel.scrollBy({
      left: direction * (card.getBoundingClientRect().width + 18),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios.get<FeedbackResponse>(
          `${import.meta.env.VITE_APP_API}feedback/all`,
        );

        setMessage(data.message ?? "");
        setFeedback(
          Array.isArray(data.galerie)
            ? data.galerie.filter(
                (image): image is string =>
                  typeof image === "string" && image.length > 0,
              )
            : [],
        );
      } catch (error) {
        const errorMessage = axios.isAxiosError<{ message?: string }>(error)
          ? error.response?.data?.message
          : undefined;
        toast.error(
          errorMessage ?? "Impossible de récupérer les feedbacks.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    void getAll();
  }, []);

  if (!isLoading && feedback.length === 0 && !message) {
    return null;
  }

  return (
    <Section
      id="temoignages"
      aria-labelledby="feedback-title"
      aria-busy={isLoading}
    >
      <Container>
        <Header>
          <Eyebrow>
            <MessageCircle size={16} aria-hidden="true" />
            La parole à la communauté
          </Eyebrow>
          <Title id="feedback-title">La communauté en parle</Title>
          <Subtitle>
            Quelques messages reçus en privé sur Instagram, de la communauté
            Nou Link.
          </Subtitle>
        </Header>

        {isLoading ? (
          <>
            <GalleryControls aria-hidden="true">
              <span>Chargement des retours…</span>
              <div>
                <ControlPlaceholder />
                <ControlPlaceholder />
              </div>
            </GalleryControls>
            <LoadingGallery aria-hidden="true">
              {Array.from({ length: 4 }, (_, index) => (
                <Card key={index}>
                  <ImageWrapper>
                    <ImagePlaceholder />
                  </ImageWrapper>
                  <CaptionPlaceholder />
                </Card>
              ))}
            </LoadingGallery>
          </>
        ) : feedback.length > 0 ? (
          <>
            <GalleryControls>
              <span>Fais défiler pour découvrir les messages</span>
              <div>
                <ScrollButton
                  type="button"
                  aria-label="Afficher les retours précédents"
                  onClick={() => scrollGallery(-1)}
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </ScrollButton>
                <ScrollButton
                  type="button"
                  aria-label="Afficher les retours suivants"
                  onClick={() => scrollGallery(1)}
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </ScrollButton>
              </div>
            </GalleryControls>
            <Carousel
              ref={carouselRef}
              role="region"
              aria-label="Galerie des retours reçus sur Instagram"
              tabIndex={0}
            >
              {feedback.map((image, index) => (
                <Card key={`${image}-${index}`}>
                  <FeedbackImage
                    src={image}
                    alt={`Capture d’un retour Instagram, ${index + 1}`}
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  <CardCaption>
                    <MessageCircle size={15} aria-hidden="true" />
                    Message reçu sur Instagram
                  </CardCaption>
                </Card>
              ))}
            </Carousel>
          </>
        ) : (
          <EmptyState>{message}</EmptyState>
        )}
      </Container>
    </Section>
  );
};

export default Feedback;

const Section = styled.section`
  padding: 92px 24px;
  overflow: hidden;
  background: linear-gradient(125deg, ${COLORS.main}, ${COLORS.second});
  color: ${COLORS.white};

  @media (max-width: 600px) {
    padding: 72px 18px;
  }
`;

const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
`;

const Header = styled.header`
  max-width: 690px;
  margin: 0 auto 38px;
  text-align: center;
`;

const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 13px;
  color: ${COLORS.yellow};
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0 0 12px;
  color: ${COLORS.white};
  font-family: Georgia, serif;
  font-size: clamp(2rem, 4.5vw, 3.3rem);
  letter-spacing: -0.045em;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  max-width: 560px;
  margin: 0 auto;
  color: rgba(253, 253, 253, 0.75);
  font-size: 0.93rem;
  line-height: 1.7;
`;

const GalleryControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;

  > span {
    color: rgba(253, 253, 253, 0.72);
    font-size: 0.78rem;
  }

  > div {
    display: flex;
    gap: 8px;
  }

  @media (max-width: 480px) {
    > span {
      font-size: 0.72rem;
    }
  }
`;

const ControlPlaceholder = styled.span`
  display: block;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(253, 253, 253, 0.2);
  border-radius: 50%;
  background: rgba(253, 253, 253, 0.1);
`;

const ScrollButton = styled.button`
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 1px solid rgba(253, 253, 253, 0.35);
  border-radius: 50%;
  background: rgba(253, 253, 253, 0.1);
  color: ${COLORS.white};
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${COLORS.yellow};
    color: ${COLORS.main};
  }

  &:focus-visible {
    outline: 3px solid ${COLORS.yellow};
    outline-offset: 3px;
  }
`;

const Carousel = styled.div`
  display: flex;
  gap: 18px;
  overflow-x: auto;
  padding: 8px 3px 20px;
  overscroll-behavior-x: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: ${COLORS.yellow} rgba(253, 253, 253, 0.18);
  scrollbar-width: thin;

  &:focus-visible {
    border-radius: 20px;
    outline: 3px solid ${COLORS.yellow};
    outline-offset: 4px;
  }

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 99px;
    background: rgba(253, 253, 253, 0.18);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 99px;
    background: ${COLORS.yellow};
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`;

const LoadingGallery = styled.div`
  display: flex;
  gap: 18px;
  overflow: hidden;
  padding: 8px 3px 20px;
`;

const Card = styled.article`
  flex: 0 0 290px;
  padding: 11px;
  scroll-snap-align: start;
  border: 1px solid rgba(253, 253, 253, 0.68);
  border-radius: 21px;
  background: ${COLORS.white};
  box-shadow: 0 14px 36px rgba(10, 39, 61, 0.2);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 42px rgba(10, 39, 61, 0.27);
  }

  @media (max-width: 480px) {
    flex-basis: min(82vw, 290px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  aspect-ratio: 0.78;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 13px;
  background: ${COLORS.Fond};
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(39, 142, 165, 0.08),
    rgba(244, 211, 94, 0.2)
  );
`;

const CaptionPlaceholder = styled.div`
  width: 65%;
  height: 12px;
  margin: 20px 3px 7px;
  border-radius: 99px;
  background: ${COLORS.grey};
`;

const Image = styled.img<{ $loaded: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  object-fit: contain;
  transition: opacity 300ms ease;
`;

const ImageFallback = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  color: ${COLORS.TexteSecondaire};
  font-size: 0.82rem;
`;

const CardCaption = styled.p`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 11px 3px 2px;
  color: ${COLORS.main};
  font-size: 0.74rem;
  font-weight: 700;

  svg {
    color: ${COLORS.second};
  }
`;

const EmptyState = styled.p`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 24px;
  border: 1px solid rgba(253, 253, 253, 0.2);
  border-radius: 16px;
  background: rgba(253, 253, 253, 0.08);
  color: rgba(253, 253, 253, 0.82);
  text-align: center;
`;
