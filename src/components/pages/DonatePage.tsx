import { useEffect, useState } from "react";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ColCentered, ColStart } from "../../styled/Common/Common";
import {
  CardContainer,
  DescriptiveCard,
  DescriptiveCardText,
  DescriptiveCardTitle,
  DescriptiveInfoImage,
  DescriptiveInfoImageContainer,
  StyledDivCardContainer,
  TextContainer,
} from "../../styled/Home/DescriptiveCard";
import "../../scss/home.scss";
import { ISlide } from "../models/ISlide";
import { SlideCarousel } from "../SlideCarousel";
import { MainHeadline } from "../../styled/Fonts/MainHeadline";
import { useAppContext } from "../hooks/useAppContext";
import { CommonText } from "../../styled/Fonts/CommonText";

export const DonatePage = () => {
  const { posts, slides } = useAppContext();
  const [donatePosts, setDonatePosts] = useState<IPost[]>([]);
  const [donateSlides, setDonateSlides] = useState<ISlide[]>([]);

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.Donate);
    setDonatePosts(filteredPosts);
    const donateSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Donate);
    if (slide) {
      donateSlides.push(slide);
      setDonateSlides(donateSlides);
    }
  }, [posts, slides]);

  return (
    <>
      <SlideCarousel slides={donateSlides} />

      <ColCentered>
        <ColStart>
          <MainHeadline>Hjälp oss att hjälpa</MainHeadline>
          <CommonText style={{ width: "100%" }}>
            Alla bidrag är oerhört välkomna, stora som små! Om du inte har
            möjlighet att adoptera en hund just nu så kan du hjälpa oss på flera
            olika sätt. Nedan kan du läsa mer om hur du kan göra skillnad.
          </CommonText>
        </ColStart>
      </ColCentered>

      <StyledDivCardContainer style={{ marginTop: "2%" }}>
        <CardContainer>
          {donatePosts.map((post, key) => (
            <DescriptiveCard
              bgcolor={key % 2 === 0 ? "blue" : "green"}
              key={key}
              style={{ cursor: "unset" }}
            >
              <>
                <DescriptiveInfoImageContainer className="descriptive__img--mobile">
                  <DescriptiveInfoImage
                    src={`https:${post.img[0].fields.file.url}`}
                    alt={post.title}
                  />
                </DescriptiveInfoImageContainer>
                {key % 2 === 0 ? (
                  <DescriptiveInfoImageContainer className="descriptive__img--tablet">
                    <DescriptiveInfoImage
                      src={`https:${post.img[0].fields.file.url}`}
                      alt={post.title}
                    />
                  </DescriptiveInfoImageContainer>
                ) : (
                  <></>
                )}
                <TextContainer>
                  <DescriptiveCardTitle>
                    {post.title.toString()}
                  </DescriptiveCardTitle>
                  <DescriptiveCardText>
                    {post.postText.toString()}
                  </DescriptiveCardText>
                </TextContainer>
                {key % 2 !== 0 ? (
                  <DescriptiveInfoImageContainer className="descriptive__img--tablet">
                    <DescriptiveInfoImage
                      src={`https:${post.img[0].fields.file.url}`}
                      alt={post.title}
                    />
                  </DescriptiveInfoImageContainer>
                ) : (
                  <></>
                )}
              </>
            </DescriptiveCard>
          ))}
        </CardContainer>
      </StyledDivCardContainer>
    </>
  );
};
