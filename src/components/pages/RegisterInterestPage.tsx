import { useEffect, useState } from "react";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCentered, ColStart } from "../../styled/Common/Common";
import { SlideCarousel } from "../SlideCarousel";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { useAppContext } from "../hooks/useAppContext";
import { MainHeadline } from "../../styled/FontStyles/MainHeadline";
import { SmallHeadline } from "../../styled/FontStyles/SmallHeadline";
import { CommonText } from "../../styled/FontStyles/CommonText";

export const RegisterInterestPage = () => {
  const { posts, slides } = useAppContext();
  const [intrerestPosts, setInterestPosts] = useState<IPost[]>([]);
  const [interestPageSlides, setInterestPageSlides] = useState<ISlide[]>([]);

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.RegisterInterest);
    setInterestPosts(filteredPosts);
    const interestSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.RegisterInterest);
    if (slide) {
      interestSlides.push(slide);
      setInterestPageSlides(interestSlides);
    }
  }, [slides, posts]);

  return (
    <>
      <SlideCarousel slides={interestPageSlides} />
      <ColCentered>
        <ColStart>
          <MainHeadline>{PageName.RegisterInterest}</MainHeadline>
        </ColStart>
        {intrerestPosts.map((post, key) => {
          if (post.list) {
            const richTextDocument = post.list as unknown as Document; //fullösning tillfälligt TODO! kolla lösning
            const renderedContent = documentToReactComponents(richTextDocument);
            return (
              <ColStart key={key}>
                <SmallHeadline>{post.title}</SmallHeadline>
                <CommonText>{post.postText}</CommonText>
                <div style={{ width: "95%" }}>{renderedContent}</div>
              </ColStart>
            );
          } else {
            return (
              <ColStart key={key}>
                <SmallHeadline>{post.title}</SmallHeadline>
                <CommonText>{post.postText}</CommonText>
              </ColStart>
            );
          }
        })}
      </ColCentered>
    </>
  );
};
