import { useState, useCallback, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
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
  const { posts, setPosts, slides } = useAppContext();
  const [contactPageSlides, setContactPageSlides] = useState<ISlide[]>([]);
  const [contactPosts, setContactPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.Contact);
      setContactPosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(response, PageName.Contact);
          setContactPosts(filteredPosts);
        } else {
          console.log("Inga inlägg");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    const contactSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Contact);
    if (slide) {
      contactSlides.push(slide);
      setContactPageSlides(contactSlides);
      console.log(slide);
    }
    fetchPosts();
  }, [fetchPosts, slides]);

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
