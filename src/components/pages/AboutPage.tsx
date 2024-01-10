import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { SlideCarousel } from "../SlideCarousel";

export const AboutPage = () => {
  const { posts, setPosts, slides } = useAppContext();
  const [aboutPosts, setAboutPosts] = useState<IPost[]>([]);
  const [aboutPageSlides, setAboutPageSlides] = useState<ISlide[]>([]);
  const navigate = useNavigate();

  // const fetchPosts = useCallback(async () => {
  //   // Fetch posts, filter them and set them to state
  //   if (posts.length > 0) {
  //     const filteredPosts = filterPostsPerPage(posts, PageName.About);
  //     setAboutPosts(filteredPosts);
  //   } else {
  //     try {
  //       const response = await getAllPosts();
  //       if (response) {
  //         setPosts(response);
  //         const filteredPosts = filterPostsPerPage(response, PageName.About);
  //         setAboutPosts(filteredPosts);
  //       } else {
  //         console.log("Inga inlägg");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const aboutSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.About);
    if (slide) {
      aboutSlides.push(slide);
      setAboutPageSlides(aboutSlides);
    }
    // fetchPosts();
  }, [slides]);

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
              <p style={{ fontFamily: "Korolev medium, sans-serif" }}>
                {post.title}
              </p>
              <p>{post.postText}</p>
            </ColStart>
          );
        })}
        <ColCenteredButtonContainer>
          <p>Här kan du läsa mer om hur vi arbetar reko</p>
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
