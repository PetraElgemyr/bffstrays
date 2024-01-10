import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { useState, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCentered } from "../../styled/Common/Common";
import { SlideCarousel } from "../SlideCarousel";
import { ColStart } from "../../styled/Spain/Spain";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";

export const MythPage = () => {
  const navigate = useNavigate();
  const { posts, slides } = useAppContext();
  const [mythPosts, setMythPosts] = useState<IPost[]>([]);
  const [mythPageSlides, setMythPageSlides] = useState<ISlide[]>([]);

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.Myths);
    setMythPosts(filteredPosts);
    const mythSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Myths);
    if (slide) {
      mythSlides.push(slide);
      setMythPageSlides(mythSlides);
    }
  }, [slides, posts]);

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
