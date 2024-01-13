import { useState, useEffect } from "react";
import { ColCentered, ColStart } from "../../styled/Common/Common";
import { SlideCarousel } from "../SlideCarousel";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { useAppContext } from "../hooks/useAppContext";
import { MainHeadline } from "../../styled/FontStyles/MainHeadline";
import { SmallHeadline } from "../../styled/FontStyles/SmallHeadline";
import { CommonText } from "../../styled/FontStyles/CommonText";

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
          <MainHeadline>{PageName.WorkEthics}</MainHeadline>
        </ColStart>
        {workEthicsPosts.map((post, index) => {
          return (
            <ColStart key={index}>
              <SmallHeadline>{post.title}</SmallHeadline>
              <CommonText>{post.postText}</CommonText>
            </ColStart>
          );
        })}
      </ColCentered>
    </>
  );
};
