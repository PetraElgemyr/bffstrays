import { useState, useEffect } from "react";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { ColCentered, ColStart, DividerLine } from "../../styled/Common/Common";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { useNavigate } from "react-router";
import { DogFactTextBold } from "../../styled/DogDetails/DogFactText";
import { SlideCarousel } from "../SlideCarousel";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { useAppContext } from "../hooks/useAppContext";
import { CommonText } from "../../styled/FontStyles/CommonText";
import { MainHeadline } from "../../styled/FontStyles/MainHeadline";

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
    }
  }, [slides, posts]);

  return (
    <>
      <SlideCarousel slides={contactPageSlides} />
      <ColCentered>
        {contactPosts.map((post, index) => (
          <ColStart key={index}>
            {post.title.toLowerCase() === PageName.Contact.toLowerCase() ? (
              <MainHeadline>{post.title}</MainHeadline>
            ) : (
              <DogFactTextBold style={{ marginLeft: 0 }}>
                {post.title}
              </DogFactTextBold>
            )}
            <CommonText>{post.postText}</CommonText>
          </ColStart>
        ))}
        <DividerLine style={{ width: "85%" }}></DividerLine>

        <ColCenteredButtonContainer>
          <ColCentered>
            <CommonText>Mer info om oss och hundarna här</CommonText>
          </ColCentered>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/hundarna/hundar-som-soker-hem")}
          >
            {PageName.Dogs}
          </SecondaryButton>
          <SecondaryButton selected={false} onClick={() => navigate("/om-oss")}>
            {PageName.About}
          </SecondaryButton>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/intresseanmalan")}
          >
            {PageName.RegisterInterest}
          </SecondaryButton>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/situationen-i-spanien")}
          >
            {PageName.Spain}
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
