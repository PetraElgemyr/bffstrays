import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { ColCentered, ColStart } from "../../styled/Common/Common";
import { SlideCarousel } from "../SlideCarousel";
import { SmallHeadline } from "../../styled/FontStyles/SmallHeadline";
import { useAppContext } from "../hooks/useAppContext";
import { MainHeadline } from "../../styled/FontStyles/MainHeadline";
import { CommonText } from "../../styled/FontStyles/CommonText";

export const AboutPage = () => {
  const { posts, slides } = useAppContext();
  const [aboutPosts, setAboutPosts] = useState<IPost[]>([]);
  const [aboutPageSlides, setAboutPageSlides] = useState<ISlide[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.About);
    setAboutPosts(filteredPosts);
    const aboutSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.About);
    if (slide) {
      aboutSlides.push(slide);
      setAboutPageSlides(aboutSlides);
    }
  }, [slides, posts]);

  return (
    <>
      <SlideCarousel slides={aboutPageSlides} />
      <ColCentered>
        <ColStart>
          <MainHeadline>{PageName.About}</MainHeadline>
        </ColStart>
        {aboutPosts.map((post, index) => {
          return (
            <ColStart key={index}>
              <SmallHeadline
                style={{ fontFamily: "Korolev medium, sans-serif" }}
              >
                {post.title}
              </SmallHeadline>
              <CommonText>{post.postText}</CommonText>
            </ColStart>
          );
        })}
        <ColCenteredButtonContainer>
          <SmallHeadline>
            Här kan du läsa mer om hur vi arbetar reko
          </SmallHeadline>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/om-oss/vart-arbetssatt")}
          >
            Vårt arbetssätt
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
