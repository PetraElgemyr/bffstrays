import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { CCarousel, CCarouselItem } from "@coreui/react";
import {
  SlideTitleContainer,
  SlideTitleText,
  StyledCarouselCaption,
  StyledSlideImage,
} from "../../styled/Home/Slide";
import { useNavigate } from "react-router";
import { ImageContainer } from "../../styled/AllDogs/DogCard";
import "../../scss/HomePage.scss";
import {
  DescriptiveCardTitle,
  DescriptiveCardText,
  DescriptiveCard,
  CardContainer,
  StyledDivCardContainer,
  DescriptiveImage,
  TextContainer,
} from "../../styled/Home/DescriptiveCard";

export const HomePage = () => {
  const { slides, descriptions } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <CCarousel controls indicators>
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
                        navigate("/hundar-som-soker-hem");
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
        <StyledDivCardContainer>
          <CardContainer>
            {descriptions.map((post, key) => (
              <DescriptiveCard
                bgcolor={key % 2 === 0 ? "green" : "blue"}
                key={key}
              >
                {key % 2 !== 0 ? (
                  <TextContainer>
                    <DescriptiveCardTitle>
                      {post.title.toString()}
                    </DescriptiveCardTitle>
                    <DescriptiveCardText>
                      {post.description.toString()}
                    </DescriptiveCardText>
                  </TextContainer>
                ) : (
                  <></>
                )}
                <ImageContainer>
                  <DescriptiveImage
                    src={`https:${post.img.fields.file.url}`}
                    alt={post.title}
                  />
                </ImageContainer>
                {key % 2 === 0 ? (
                  <TextContainer>
                    <DescriptiveCardTitle>
                      {post.title.toString()}
                    </DescriptiveCardTitle>
                    <DescriptiveCardText>
                      {post.description.toString()}
                    </DescriptiveCardText>
                  </TextContainer>
                ) : (
                  <></>
                )}
              </DescriptiveCard>
            ))}
          </CardContainer>
        </StyledDivCardContainer>
      </div>
    </>
  );
};
