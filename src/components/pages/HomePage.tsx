import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
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
import { useEffect, useState } from "react";
import { findSlide } from "../helpers/FilterHelper";
import { Slide } from "../models/Slide";
import { SlideCarousel } from "../SlideCarousel";

export const HomePage = () => {
  const { slides, descriptions } = useAppContext();
  const [homePageSlides, setHomePageSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const homeSlides: Slide[] = [];
    const dogSlide = findSlide(slides, PageName.Dogs);
    const spainSlide = findSlide(slides, PageName.Spain);
    const donateSlide = findSlide(slides, PageName.Donate);
    if (dogSlide && spainSlide && donateSlide) {
      homeSlides.push(dogSlide, spainSlide, donateSlide);
      setHomePageSlides(homeSlides);
      console.log(homeSlides);
    }
  }, [slides]);

  return (
    <>
      <div>
        <SlideCarousel slides={homePageSlides} />
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
