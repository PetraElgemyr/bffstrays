import { useEffect, useState } from "react";
import { PageName } from "../enums/PageName";
import { IPost } from "../models/IPost";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { useNavigate } from "react-router";
import { ISlide } from "../models/ISlide";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { ColCentered, ColStart } from "../../styled/Common/Common";
import { SlideCarousel } from "../SlideCarousel";
import { MainHeadline } from "../../styled/FontStyles/MainHeadline";
import { useAppContext } from "../hooks/useAppContext";
import { SmallHeadline } from "../../styled/FontStyles/SmallHeadline";
import { CommonText } from "../../styled/FontStyles/CommonText";

export const AdoptionPage = () => {
  const { posts, slides } = useAppContext();
  const [adoptionPosts, setAdoptionPosts] = useState<IPost[]>([]);
  const [adoptionPageSlides, setAdoptionPageSlides] = useState<ISlide[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.Adoption);
    setAdoptionPosts(filteredPosts);
    const adoptionSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Adoption);
    if (slide) {
      adoptionSlides.push(slide);
      setAdoptionPageSlides(adoptionSlides);
    }
  }, [slides, posts]);

  return (
    <>
      <SlideCarousel slides={adoptionPageSlides} />
      <ColCentered>
        <ColStart>
          <MainHeadline>{PageName.Adoption}</MainHeadline>
        </ColStart>
        {adoptionPosts.map((post, index) => {
          return (
            <ColStart key={index}>
              <SmallHeadline>{post.title}</SmallHeadline>
              <CommonText>{post.postText}</CommonText>
            </ColStart>
          );
        })}
        <ColCenteredButtonContainer>
          <SmallHeadline>
            Klicka här för att läsa mer om de krav vi har på adoptörer
          </SmallHeadline>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/om-adoption/krav-pa-adoptorer")}
          >
            {PageName.Requirements}
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
