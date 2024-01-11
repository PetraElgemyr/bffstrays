import { useState, useEffect } from "react";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import "../../scss/home.scss";
import { useNavigate } from "react-router";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { SlideCarousel } from "../SlideCarousel";
import { SmallHeadline } from "../../styled/Fonts/SmallHeadline";
import { useAppContext } from "../hooks/useAppContext";

export const SpainPage = () => {
  const { posts, slides } = useAppContext();
  const [spainPosts, setSpainPosts] = useState<IPost[]>([]);
  const [spainPageSlides, setSpainPageSlides] = useState<ISlide[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.Spain);
    setSpainPosts(filteredPosts);
    const spainSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Spain);
    if (slide) {
      spainSlides.push(slide);
      setSpainPageSlides(spainSlides);
    }
  }, [slides, posts]);

  return (
    <>
      <SlideCarousel slides={spainPageSlides} />
      <ColCentered>
        {spainPosts.map((post, index) => {
          return (
            <ColStart key={index}>
              <SmallHeadline>{post.title}</SmallHeadline>
              <p>{post.postText}</p>
            </ColStart>
          );
        })}
        <ColCenteredButtonContainer>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/myter-om-gatuhundar")}
          >
            Myter om gatuhundar
          </SecondaryButton>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/sjukdomar")}
          >
            Sjukdomar
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
