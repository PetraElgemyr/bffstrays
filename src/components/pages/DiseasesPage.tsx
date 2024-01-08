import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { PageName } from "../enums/PageName";
import { useState, useCallback, useEffect } from "react";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { SlideCarousel } from "../SlideCarousel";
import { useAppContext } from "../contexts/AppContext";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";

export const DiseasesPage = () => {
  const { posts, setPosts, slides } = useAppContext();
  const [diseasesPosts, setDiseasesPosts] = useState<IPost[]>([]);
  const [diseasesPageSlides, setDiseasesPageSlides] = useState<ISlide[]>([]);
  const navigate = useNavigate();

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.Diseases);
      setDiseasesPosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(response, PageName.Diseases);
          setDiseasesPosts(filteredPosts);
        } else {
          console.log("Inga inlägg");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    const workEthicsSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Diseases);
    if (slide) {
      workEthicsSlides.push(slide);
      setDiseasesPageSlides(workEthicsSlides);
    }
    fetchPosts();
  }, [fetchPosts, slides]);

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
        <p>Vill du läsa mer om hundarna vi räddar?</p>
        <ColCenteredButtonContainer>
          <SecondaryButton onClick={() => navigate("/situationen-i-spanien")}>
            {PageName.Spain}
          </SecondaryButton>
          <SecondaryButton onClick={() => navigate("/myter-om-gatuhundar")}>
            {PageName.Myths}
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
