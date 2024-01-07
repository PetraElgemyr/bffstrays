import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { useState, useEffect, useCallback } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { Post } from "../models/Post";
import { Slide } from "../models/Slide";
import { ColCentered } from "../../styled/Common/Common";
import { SlideCarousel } from "../SlideCarousel";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { ColStart } from "../../styled/Spain/Spain";

export const MythPage = () => {
  const navigate = useNavigate();
  const { posts, setPosts, slides } = useAppContext();
  const [mythPosts, setMythPosts] = useState<Post[]>([]);
  const [mythPageSlides, setMythPageSlides] = useState<Slide[]>([]);

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.Myths);
      setMythPosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(response, PageName.Myths);
          setMythPosts(filteredPosts);
        } else {
          console.log("Inga inlägg");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    const mythSlides: Slide[] = [];
    const slide = findSlide(slides, PageName.Myths);
    if (slide) {
      mythSlides.push(slide);
      setMythPageSlides(mythSlides);
    }
    fetchPosts();
  }, [fetchPosts, slides]);

  return (
    <>
      <SlideCarousel slides={mythPageSlides} />

      <ColCentered>
        <ColStart>
          {" "}
          <h2>Myter om gatuhundar</h2>
        </ColStart>

        {mythPosts.map((post, index) => (
          <ColStart key={index}>
            <h4 style={{ fontFamily: "Korolev medium, sans-serif" }}>
              {post.title}
            </h4>
            {/* <DescriptiveCardTitle>{post.title}</DescriptiveCardTitle> */}
            <p>{post.postText}</p>
          </ColStart>
        ))}

        <p>Vill du läsa mer om hundarna vi räddar?</p>
        <SecondaryButton onClick={() => navigate("/situationen-i-spanien")}>
          Siutationen i Spanien
        </SecondaryButton>
        <SecondaryButton onClick={() => navigate("/sjukdomar")}>
          Sjukdomar
        </SecondaryButton>
      </ColCentered>
    </>
  );
};
