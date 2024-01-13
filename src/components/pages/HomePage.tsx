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
import { ISlide } from "../models/ISlide";
import { SlideCarousel } from "../SlideCarousel";
import { useNavigate } from "react-router";
import { useAppContext } from "../hooks/useAppContext";

export const HomePage = () => {
  const { slides, descriptions } = useAppContext();
  const [homePageSlides, setHomePageSlides] = useState<ISlide[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const homeSlides: ISlide[] = [];
    const dogSlide = findSlide(slides, PageName.Dogs);
    const spainSlide = findSlide(slides, PageName.Spain);
    const donateSlide = findSlide(slides, PageName.Donate);
    if (dogSlide && spainSlide && donateSlide) {
      homeSlides.push(dogSlide, spainSlide, donateSlide);
      setHomePageSlides(homeSlides);
    }
  }, [slides]);

  return (
    <>
      <div>
        <SlideCarousel slides={homePageSlides} />
        <StyledDivCardContainer>
          <CardContainer>
            {descriptions
              .sort((a, b) => a.descriptionId - b.descriptionId)
              .map((post, key) => (
                <DescriptiveCard
                  bgcolor={key % 2 === 0 ? "green" : "blue"}
                  key={key}
                  onClick={() => {
                    switch (post.title.toLowerCase()) {
                      case PageName.Dogs.toLowerCase():
                        navigate("/hundarna/hundar-som-soker-hem");
                        break;
                      case PageName.Adoption.toLowerCase():
                        navigate("/om-adoption");
                        break;
                      case PageName.About.toLowerCase():
                        navigate("/om-oss");
                        break;
                      case PageName.WorkEthics.toLowerCase():
                        navigate("/om-oss/vart-arbetssatt");
                        break;
                      case PageName.Requirements.toLowerCase():
                        navigate("/om-adoption/krav-pa-adoptorer");
                        break;
                      case PageName.Donate.toLowerCase():
                        navigate("/donera");
                        break;
                      default:
                        break;
                    }
                  }}
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
