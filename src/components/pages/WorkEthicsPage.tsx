import { useState, useCallback, useEffect } from "react";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { SlideCarousel } from "../SlideCarousel";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";

export const WorkEthicsPage = () => {
  const { posts, setPosts, slides } = useAppContext();
  const [workEthicsPosts, setWorkEthicsPosts] = useState<IPost[]>([]);
  const [ethicsPageSlides, setEthicsPageSlides] = useState<ISlide[]>([]);

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.WorkEthics);
      setWorkEthicsPosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(
            response,
            PageName.WorkEthics
          );
          setWorkEthicsPosts(filteredPosts);
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
    const slide = findSlide(slides, PageName.WorkEthics);
    if (slide) {
      workEthicsSlides.push(slide);
      setEthicsPageSlides(workEthicsSlides);
    }
    fetchPosts();
  }, [fetchPosts, slides]);

  return (
    <>
      <SlideCarousel slides={ethicsPageSlides} />
      <ColCentered>
        <ColStart>
          <h2>Vårt arbetssätt</h2>
        </ColStart>
        {workEthicsPosts.map((post, index) => {
          return (
            <ColStart key={index}>
              <p style={{ fontFamily: "Korolev medium, sans-serif" }}>
                {post.title}
              </p>
              <p>{post.postText}</p>
            </ColStart>
          );
        })}
      </ColCentered>
    </>
  );
};
