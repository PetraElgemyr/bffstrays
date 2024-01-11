import { useEffect, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { SlideCarousel } from "../SlideCarousel";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

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
          <h2>Intresseanmälan</h2>
        </ColStart>
        {intrerestPosts.map((post, key) => {
          if (post.list) {
            const richTextDocument = post.list as unknown as Document; //fullösning tillfälligt TODO! kolla lösning
            const renderedContent = documentToReactComponents(richTextDocument);
            return (
              <ColStart key={key}>
                <p style={{ fontFamily: "Korolev medium, sans-serif" }}>
                  {post.title}
                </p>
                <p>{post.postText}</p>
                <div>{renderedContent}</div>
              </ColStart>
            );
          } else {
            return (
              <ColStart key={key}>
                <p style={{ fontFamily: "Korolev medium, sans-serif" }}>
                  {post.title}
                </p>
                <p>{post.postText}</p>
              </ColStart>
            );
          }
        })}
      </ColCentered>
    </>
  );
};
