import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { PageName } from "../enums/PageName";
import { useState, useEffect } from "react";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { SlideCarousel } from "../SlideCarousel";
import { useAppContext } from "../contexts/AppContext";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";

export const DiseasesPage = () => {
  const { slides, posts } = useAppContext();
  const [diseasesPosts, setDiseasesPosts] = useState<IPost[]>([]);
  const [diseasesPageSlides, setDiseasesPageSlides] = useState<ISlide[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.Diseases);
    setDiseasesPosts(filteredPosts);
    const diseasesSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Diseases);
    if (slide) {
      diseasesSlides.push(slide);
      setDiseasesPageSlides(diseasesSlides);
    }
  }, [slides, posts]);

  return (
    <>
      <SlideCarousel slides={diseasesPageSlides} />
      <ColCentered>
        <ColStart>
          <h2>Sjukdomar</h2>
        </ColStart>
        {diseasesPosts.map((post, index) => {
          return (
            <ColStart key={index}>
              <p style={{ fontFamily: "Korolev medium, sans-serif" }}>
                {post?.title}
              </p>
              <p>{post.postText}</p>
            </ColStart>
          );
        })}
        <ColCenteredButtonContainer>
          {" "}
          <p>Vill du läsa mer om hundarna vi räddar?</p>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/situationen-i-spanien")}
          >
            {PageName.Spain}
          </SecondaryButton>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/myter-om-gatuhundar")}
          >
            {PageName.Myths}
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
