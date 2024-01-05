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
import "../../scss/home.scss";
import {
  DescriptiveCardTitle,
  DescriptiveCardText,
  DescriptiveCard,
  CardContainer,
  StyledDivCardContainer,
  DescriptiveImage,
  TextContainer,
  DescriptiveImageContainer,
} from "../../styled/Home/DescriptiveCard";

export const HomePage = () => {
  const { slides, descriptions } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      <div>
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
                <>
                  <DescriptiveImageContainer className="descriptive__img--mobile">
                    <DescriptiveImage
                      src={`https:${post.img.fields.file.url}`}
                      alt={post.title}
                    />
                  </DescriptiveImageContainer>
                  {key % 2 === 0 ? (
                    <DescriptiveImageContainer className="descriptive__img--tablet">
                      <DescriptiveImage
                        src={`https:${post.img.fields.file.url}`}
                        alt={post.title}
                      />
                    </DescriptiveImageContainer>
                  ) : (
                    <></>
                  )}
                  <TextContainer>
                    <DescriptiveCardTitle>
                      {post.title.toString()}
                    </DescriptiveCardTitle>
                    <DescriptiveCardText>
                      {post.description.toString()}
                    </DescriptiveCardText>
                  </TextContainer>
                  {key % 2 !== 0 ? (
                    <DescriptiveImageContainer className="descriptive__img--tablet">
                      <DescriptiveImage
                        src={`https:${post.img.fields.file.url}`}
                        alt={post.title}
                      />
                    </DescriptiveImageContainer>
                  ) : (
                    <></>
                  )}
                </>
              </DescriptiveCard>
            ))}
          </CardContainer>
        </StyledDivCardContainer>
      </div>
    </>
  );
};
