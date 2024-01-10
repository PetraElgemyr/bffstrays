import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { SlideCarousel } from "../SlideCarousel";
import { SmallHeadline } from "../../styled/Fonts/SmallHeadline";

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
          <h2>Om oss</h2>
        </ColStart>
        {aboutPosts.map((post, index) => {
          return (
            <ColStart key={index}>
              <SmallHeadline
                style={{ fontFamily: "Korolev medium, sans-serif" }}
              >
                {post.title}
              </SmallHeadline>
              <p>{post.postText}</p>
            </ColStart>
          );
        })}
        <ColCenteredButtonContainer>
          <SmallHeadline>
            Här kan du läsa mer om hur vi arbetar reko
          </SmallHeadline>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/vart-arbetssatt")}
          >
            Vårt arbetssätt
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
