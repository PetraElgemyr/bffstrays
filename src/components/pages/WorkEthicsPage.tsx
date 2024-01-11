import { useState, useEffect } from "react";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { SlideCarousel } from "../SlideCarousel";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { useAppContext } from "../hooks/useAppContext";

export const WorkEthicsPage = () => {
  const { posts, slides } = useAppContext();
  const [workEthicsPosts, setWorkEthicsPosts] = useState<IPost[]>([]);
  const [ethicsPageSlides, setEthicsPageSlides] = useState<ISlide[]>([]);

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.WorkEthics);
    setWorkEthicsPosts(filteredPosts);
    const workEthicsSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.WorkEthics);
    if (slide) {
      workEthicsSlides.push(slide);
      setEthicsPageSlides(workEthicsSlides);
    }
  }, [slides, posts]);

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
