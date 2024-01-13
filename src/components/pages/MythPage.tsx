import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { useState, useEffect } from "react";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCentered, ColStart } from "../../styled/Common/Common";
import { SlideCarousel } from "../SlideCarousel";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { useAppContext } from "../hooks/useAppContext";
import { MainHeadline } from "../../styled/FontStyles/MainHeadline";
import { CommonText } from "../../styled/FontStyles/CommonText";
import { SmallHeadline } from "../../styled/FontStyles/SmallHeadline";

export const MythPage = () => {
  const navigate = useNavigate();
  const { posts, slides } = useAppContext();
  const [mythPosts, setMythPosts] = useState<IPost[]>([]);
  const [mythPageSlides, setMythPageSlides] = useState<ISlide[]>([]);

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.Myths);
    setMythPosts(filteredPosts);
    const mythSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Myths);
    if (slide) {
      mythSlides.push(slide);
      setMythPageSlides(mythSlides);
    }
  }, [slides, posts]);

  return (
    <>
      <SlideCarousel slides={mythPageSlides} />
      <ColCentered>
        <ColStart>
          <MainHeadline>{PageName.Myths}</MainHeadline>
        </ColStart>

        {mythPosts.map((post, index) => (
          <ColStart key={index}>
            <SmallHeadline>{post.title}</SmallHeadline>
            <CommonText>{post.postText}</CommonText>
          </ColStart>
        ))}
        <ColCenteredButtonContainer>
          <CommonText>Vill du läsa mer om hundarna vi räddar?</CommonText>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/situationen-i-spanien")}
          >
            {PageName.Spain}
          </SecondaryButton>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/sjukdomar")}
          >
            {PageName.Diseases}
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
