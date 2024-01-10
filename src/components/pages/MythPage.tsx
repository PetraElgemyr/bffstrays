import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { useState, useEffect, useCallback } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCentered } from "../../styled/Common/Common";
import { SlideCarousel } from "../SlideCarousel";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { ColStart } from "../../styled/Spain/Spain";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";

export const MythPage = () => {
  const navigate = useNavigate();
  const { posts, setPosts, slides } = useAppContext();
  const [mythPosts, setMythPosts] = useState<IPost[]>([]);
  const [mythPageSlides, setMythPageSlides] = useState<ISlide[]>([]);

  // const fetchPosts = useCallback(async () => {
  //   // Fetch posts, filter them and set them to state
  //   if (posts.length > 0) {
  //     const filteredPosts = filterPostsPerPage(posts, PageName.Myths);
  //     setMythPosts(filteredPosts);
  //   } else {
  //     try {
  //       const response = await getAllPosts();
  //       if (response) {
  //         setPosts(response);
  //         const filteredPosts = filterPostsPerPage(response, PageName.Myths);
  //         setMythPosts(filteredPosts);
  //       } else {
  //         console.log("Inga inlägg");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const mythSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Myths);
    if (slide) {
      mythSlides.push(slide);
      setMythPageSlides(mythSlides);
    }
    // fetchPosts();
  }, [slides]);

  return (
    <>
      <SlideCarousel slides={mythPageSlides} />

      <ColCentered>
        <ColStart>
          <h2>Myter om gatuhundar</h2>
        </ColStart>

        {mythPosts.map((post, index) => (
          <ColStart key={index}>
            <p style={{ fontFamily: "Korolev medium, sans-serif" }}>
              {post.title}
            </p>
            {/* <DescriptiveCardTitle>{post.title}</DescriptiveCardTitle> */}
            <p>{post.postText}</p>
          </ColStart>
        ))}
        <ColCenteredButtonContainer>
          <p>Vill du läsa mer om hundarna vi räddar?</p>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/situationen-i-spanien")}
          >
            Siutationen i Spanien
          </SecondaryButton>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/sjukdomar")}
          >
            Sjukdomar
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
