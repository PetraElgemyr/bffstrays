import { useState, useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColStart } from "../../styled/Spain/Spain";
import { ColCentered, DividerLine } from "../../styled/Common/Common";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { useNavigate } from "react-router";
import { DogFactTextBold } from "../../styled/DogDetails/DogFactText";
import { SlideCarousel } from "../SlideCarousel";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";

export const ContactPage = () => {
  const { slides, posts } = useAppContext();
  const [contactPageSlides, setContactPageSlides] = useState<ISlide[]>([]);
  const [contactPosts, setContactPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.Contact);
    setContactPosts(filteredPosts);
    const contactSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Contact);
    if (slide) {
      contactSlides.push(slide);
      setContactPageSlides(contactSlides);
      console.log(slide);
    }
    // fetchPosts();
  }, [slides, posts]);

  return (
    <>
      <SlideCarousel slides={contactPageSlides} />
      <ColCentered>
        {contactPosts.map((post, index) => (
          <ColStart key={index}>
            {post.title.toLowerCase() === PageName.Contact.toLowerCase() ? (
              <h2>{post.title}</h2>
            ) : (
              <DogFactTextBold style={{ marginLeft: 0 }}>
                {post.title}
              </DogFactTextBold>
            )}
            <p>{post.postText}</p>
          </ColStart>
        ))}
        <DividerLine style={{ width: "85%" }}></DividerLine>

        <ColCenteredButtonContainer>
          <p>Mer info om oss och hundarna här</p>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/hundar-som-soker-hem")}
          >
            Hundar som söker hem
          </SecondaryButton>
          <SecondaryButton selected={false} onClick={() => navigate("/om-oss")}>
            Om föreningen
          </SecondaryButton>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/intresseanmalan")}
          >
            Intresseanmälan{" "}
          </SecondaryButton>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/situationen-i-spanien")}
          >
            Situationen i Spanien
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
