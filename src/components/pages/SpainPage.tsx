import { useState, useCallback, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { Post } from "../models/Post";
import { Slide } from "../models/Slide";
import "../../scss/home.scss";
import { useNavigate } from "react-router";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { SlideCarousel } from "../SlideCarousel";

export const SpainPage = () => {
  const { posts, setPosts, slides } = useAppContext();
  const [spainPosts, setSpainPosts] = useState<Post[]>([]);
  const [spainPageSlides, setSpainPageSlides] = useState<Slide[]>([]);
  const navigate = useNavigate();

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.Spain);
      setSpainPosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(response, PageName.Spain);
          setSpainPosts(filteredPosts);
        } else {
          console.log("Inga inlägg");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    const spainSlides: Slide[] = [];
    const slide = findSlide(slides, PageName.Spain);
    if (slide) {
      spainSlides.push(slide);
      setSpainPageSlides(spainSlides);
    }
    fetchPosts();
  }, [fetchPosts, slides]);

  return (
    <>
      <SlideCarousel slides={spainPageSlides} />
      <ColCentered>
        {spainPosts.map((post, index) => {
          return (
            <ColStart key={index}>
              <h2>{post.title}</h2>
              <p>{post.postText}</p>
            </ColStart>
          );
        })}
        <ColCenteredButtonContainer>
          <SecondaryButton onClick={() => navigate("/myter-om-gatuhundar")}>
            Myter om gatuhundar
          </SecondaryButton>
          <SecondaryButton onClick={() => navigate("/sjukdomar")}>
            Sjukdomar
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
