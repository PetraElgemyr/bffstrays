import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { getAllPosts, getSlides } from "../helpers/RepositoryHelper";
import { filterPostsPerPage } from "../helpers/FilterHelper";
import { PageName } from "../enums/PageName";
import { Post } from "../models/Post";
import { CCarousel, CCarouselItem } from "@coreui/react";
import { Slide } from "../models/Slide";
import {
  SlideTitleContainer,
  SlideTitleText,
  StyledCarouselCaption,
  StyledSlideImage,
} from "../../styled/Home/Slide";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const { posts, setPosts } = useAppContext();
  const [homePosts, setHomePosts] = useState<Post[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);
  const navigate = useNavigate();
  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.Home);
      setHomePosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(response, PageName.Home);
          setHomePosts(filteredPosts);
        } else {
          console.log("Inga inlägg");
          setPosts([]);
          setHomePosts([]);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const fetchSlides = useCallback(async () => {
    //Fetch slides and set them to state
    if (slides.length === 0) {
      try {
        const response = await getSlides();
        response ? setSlides(response) : setSlides([]);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    fetchPosts();
    fetchSlides();
  }, [fetchPosts, fetchSlides]);

  return (
    <>
      <div>
        <CCarousel controls indicators>
          {slides.map((slide, index) => (
            <CCarouselItem key={index}>
              <StyledSlideImage
                className="d-block w-100"
                src={slide.slideImage[0].fields.file.url}
                alt={slide.slideTitle}
              />
              <StyledCarouselCaption className="w-100">
                <SlideTitleContainer
                  onClick={() => {
                    switch (slide.slideTitle.toLowerCase()) {
                      case PageName.Donate.toLowerCase():
                        navigate("/donera");
                        break;
                      case PageName.Dogs.toLowerCase():
                        navigate("/hundar-som-soker-hem");
                        break;

                      case PageName.Spain.toLowerCase():
                        navigate("/situationen-i-spanien");
                        break;

                      default:
                        break;
                    }
                  }}
                >
                  <SlideTitleText>{slide.slideTitle}</SlideTitleText>
                </SlideTitleContainer>
              </StyledCarouselCaption>
            </CCarouselItem>
          ))}
        </CCarousel>

        {homePosts.map((post, key) => (
          <article key={key}>
            <h6>{post.title.toString()}</h6>
            <p>{post.postText.toString()}</p>
          </article>
        ))}
      </div>
    </>
  );
};
