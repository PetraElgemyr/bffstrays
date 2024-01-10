import { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { IPost } from "../models/IPost";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { useNavigate } from "react-router";
import { ISlide } from "../models/ISlide";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { SlideCarousel } from "../SlideCarousel";

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
          <h2>Adoption via Bff Strays</h2>
        </ColStart>
        {adoptionPosts.map((post, index) => {
          return (
            <ColStart key={index}>
              <p style={{ fontFamily: "Korolev medium, sans-serif" }}>
                {post.title}
              </p>
              <p>{post.postText}</p>
            </ColStart>
          );
        })}
        <ColCenteredButtonContainer>
          <p>Klicka här för att läsa mer om de krav vi har på adoptörer</p>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/krav-pa-adoptorer")}
          >
            {PageName.Requirements}
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
