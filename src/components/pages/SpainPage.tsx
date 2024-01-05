import { useState, useCallback, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { Post } from "../models/Post";
import { Slide } from "../models/Slide";
import { CCarouselItem } from "@coreui/react";
import {
  StyledSlideImage,
  StyledCarouselCaption,
  SlideTitleContainer,
  SlideTitleText,
} from "../../styled/Home/Slide";
import "../../scss/home.scss";
import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/PrimaryButton";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart, StyledCarouselHeader } from "../../styled/Spain/Spain";

export const SpainPage = () => {
  const { posts, setPosts, slides } = useAppContext();
  const [spainPosts, setSpainPosts] = useState<Post[]>([]);
  const [slideImg, setSlideImg] = useState<Slide>();
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
    const fetchSpainSlide = () => {
      const spainSlide = slides.find((slide) => {
        return slide.slideTitle === PageName.Spain;
      });
      if (spainSlide) setSlideImg(spainSlide);
    };

    fetchPosts();
    fetchSpainSlide();
  }, [fetchPosts, slides]);

  return (
    <>
      <StyledCarouselHeader>
        <CCarouselItem>
          <StyledSlideImage
            className="d-block w-100"
            src={slideImg?.slideImage[0].fields.file.url}
            alt={slideImg?.slideTitle}
          />
          <StyledCarouselCaption className="w-100 descriptive__img--tablet">
            <SlideTitleContainer>
              <SlideTitleText>{slideImg?.slideTitle}</SlideTitleText>
            </SlideTitleContainer>
          </StyledCarouselCaption>
        </CCarouselItem>
      </StyledCarouselHeader>
      <ColCentered>
        {spainPosts.map((post, index) => {
          return (
            <ColStart key={index}>
              <h2>{post.title}</h2>
              <p>{post.postText}</p>
              {post.img && (
                <img
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    marginTop: "5%",
                  }}
                  src={`https:${post.img[0].fields.file.url}`}
                  alt={post.title}
                />
              )}
            </ColStart>
          );
        })}
        <ColCentered style={{ width: "85%" }}>
          <SecondaryButton onClick={() => navigate("/myter-om-gatuhundar")}>
            Myter om gatuhundar
          </SecondaryButton>
          <SecondaryButton onClick={() => navigate("/sjukdomar")}>
            Sjukdomar
          </SecondaryButton>
        </ColCentered>
      </ColCentered>
    </>
  );
};
