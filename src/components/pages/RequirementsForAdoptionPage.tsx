import { useState, useEffect } from "react";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCentered, ColStart } from "../../styled/Common/Common";
import { SlideCarousel } from "../SlideCarousel";
import { useAppContext } from "../hooks/useAppContext";
import { MainHeadline } from "../../styled/FontStyles/MainHeadline";
import { SmallHeadline } from "../../styled/FontStyles/SmallHeadline";
import { CommonText } from "../../styled/FontStyles/CommonText";

export const RequirementsForAdoptionPage = () => {
  const { posts, slides } = useAppContext();
  const [requirementsPosts, setRequirementsPosts] = useState<IPost[]>([]);
  const [requirementsPageSlides, setRequirementsPageSlides] = useState<
    ISlide[]
  >([]);

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.Requirements);
    setRequirementsPosts(filteredPosts);
    const requirementsSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Requirements);
    if (slide) {
      requirementsSlides.push(slide);
      setRequirementsPageSlides(requirementsSlides);
    }
  }, [slides, posts]);

  return (
    <>
      <SlideCarousel slides={requirementsPageSlides} />
      <ColCentered>
        <ColStart>
          <MainHeadline>{PageName.Requirements}</MainHeadline>
        </ColStart>
        {requirementsPosts.map((post, index) => {
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
