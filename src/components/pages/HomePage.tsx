import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import {
  getAllPosts,
  getPageDescriptions,
  getSlides,
} from "../helpers/RepositoryHelper";
import { PageName } from "../enums/PageName";
import { CCarousel, CCarouselItem } from "@coreui/react";
import { Slide } from "../models/Slide";
import {
  SlideTitleContainer,
  SlideTitleText,
  StyledCarouselCaption,
  StyledSlideImage,
} from "../../styled/Home/Slide";
import { useNavigate } from "react-router";
import {
  CardTextContainer,
  ColContainer,
  DogCard,
  Image,
  ImageContainer,
  StyledDiv,
} from "../../styled/AllDogs/DogCard";
import "../../scss/HomePage.scss";
import {
  DescriptiveCardTitle,
  DescriptiveCardText,
} from "../../styled/Home/DescriptiveCard";
import { PostDescription } from "../models/PostDescription";
export const HomePage = () => {
  const { posts, setPosts } = useAppContext();
  // const [homePosts, setHomePosts] = useState<Post[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [descriptions, setDescriptions] = useState<PostDescription[]>([]);
  const navigate = useNavigate();

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length === 0) {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
        } else {
          console.log("Inga inlägg");
          setPosts([]);
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
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const fetchDescriptions = useCallback(async () => {
    if (descriptions.length === 0) {
      try {
        const response = await getPageDescriptions();
        console.log(response);

        response ? setDescriptions(response) : setDescriptions([]);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    fetchPosts();
    fetchSlides();
    fetchDescriptions();
  }, [fetchPosts, fetchSlides, fetchDescriptions]);

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
        <StyledDiv>
          <ColContainer>
            {descriptions.map((post, key) => (
              <DogCard bgcolor={key % 2 === 0 ? "green" : "blue"} key={key}>
                <ImageContainer>
                  <Image
                    src={`https:${post.img.fields.file.url}`}
                    alt={post.title}
                  />
                </ImageContainer>
                <CardTextContainer>
                  <DescriptiveCardTitle>
                    {post.title.toString()}
                  </DescriptiveCardTitle>
                  <DescriptiveCardText>
                    {post.description.toString()}
                  </DescriptiveCardText>
                </CardTextContainer>
              </DogCard>
            ))}
          </ColContainer>
        </StyledDiv>
      </div>
    </>
  );
};
