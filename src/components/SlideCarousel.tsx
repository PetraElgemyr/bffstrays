import { CCarousel, CCarouselItem } from "@coreui/react";
import { ISlide } from "./models/ISlide";
import {
  SlideTitleContainer,
  SlideTitleText,
  StyledCarousel,
  StyledCarouselCaption,
  StyledSlideImage,
  CarouselCaptionLower,
} from "../styled/SlideCarousel/Slide";
import { useNavigate } from "react-router";
import { PageName } from "./enums/PageName";

interface ICarouselProps {
  slides: ISlide[];
}

export const SlideCarousel = ({ slides }: ICarouselProps) => {
  const navigate = useNavigate();

  if (slides.length === 1) {
    return (
      <StyledCarousel interval={false}>
        {slides.map((slide, index) => (
          <CCarouselItem key={index}>
            <StyledSlideImage
              className="d-block w-100"
              src={`https:${slide.slideImage[0].fields.file.url}`}
              alt={slide.slideTitle}
            />
            <CarouselCaptionLower className="w-100">
              <SlideTitleContainer>
                <SlideTitleText>{slide.slideTitle}</SlideTitleText>
              </SlideTitleContainer>
            </CarouselCaptionLower>
          </CCarouselItem>
        ))}
      </StyledCarousel>
    );
  } else if (slides.length > 1) {
    return (
      <CCarousel
        controls
        indicators
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        {slides.map((slide, index) => (
          <CCarouselItem key={index}>
            <StyledSlideImage
              className="d-block w-100"
              src={slide.slideImage[0].fields.file.url}
              alt={slide.slideTitle}
            />
            <StyledCarouselCaption className="w-100">
              <SlideTitleContainer
                onClick={() => {
                  switch (slide.slideTitle.toLowerCase()) {
                    case PageName.Donate.toLowerCase():
                      navigate("/donera");
                      break;
                    case PageName.Dogs.toLowerCase():
                      navigate("/situationen-i-spanien/hundar-som-soker-hem");
                      break;
                    case PageName.Spain.toLowerCase():
                      navigate("/situationen-i-spanien");
                      break;
                    default:
                      break;
                  }
                }}
              >
                <SlideTitleText>{slide.slideTitle}</SlideTitleText>
              </SlideTitleContainer>
            </StyledCarouselCaption>
          </CCarouselItem>
        ))}
      </CCarousel>
    );
  }
};
