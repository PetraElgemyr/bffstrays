import { useState, useCallback, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { SlideCarousel } from "../SlideCarousel";

export const RequirementsForAdoptionPage = () => {
  const { posts, setPosts, slides } = useAppContext();
  const [requirementsPosts, setRequirementsPosts] = useState<IPost[]>([]);
  const [requirementsPageSlides, setRequirementsPageSlides] = useState<
    ISlide[]
  >([]);

  // const fetchPosts = useCallback(async () => {
  //   // Fetch posts, filter them and set them to state
  //   if (posts.length > 0) {
  //     const filteredPosts = filterPostsPerPage(posts, PageName.Requirements);
  //     setRequirementsPosts(filteredPosts);
  //   } else {
  //     try {
  //       const response = await getAllPosts();
  //       if (response) {
  //         setPosts(response);
  //         const filteredPosts = filterPostsPerPage(
  //           response,
  //           PageName.Requirements
  //         );
  //         setRequirementsPosts(filteredPosts);
  //       } else {
  //         console.log("Inga inlägg");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const requirementsSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Requirements);
    if (slide) {
      requirementsSlides.push(slide);
      setRequirementsPageSlides(requirementsSlides);
    }
    // fetchPosts();
  }, [slides]);

  return (
    <>
      <SlideCarousel slides={requirementsPageSlides} />
      <ColCentered>
        <ColStart>
          <h2>Krav på adoptörer</h2>
        </ColStart>
        {requirementsPosts.map((post, index) => {
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
