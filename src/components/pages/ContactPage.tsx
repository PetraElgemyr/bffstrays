import { useState, useCallback, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { Post } from "../models/Post";
import { Slide } from "../models/Slide";
import { ColStart } from "../../styled/Spain/Spain";
import { ColCentered } from "../../styled/Common/Common";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { useNavigate } from "react-router";
import { DogFactTextBold } from "../../styled/DogDetails/DogFactText";
import { SlideCarousel } from "../SlideCarousel";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";

export const ContactPage = () => {
  const { posts, setPosts, slides } = useAppContext();
  const [contactPageSlides, setContactPageSlides] = useState<Slide[]>([]);
  const [contactPosts, setContactPosts] = useState<Post[]>([]);
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
    const contactSlides: Slide[] = [];
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

        <ColCenteredButtonContainer>
          <SecondaryButton onClick={() => navigate("/hundarsom-soker-hem")}>
            Hundar som söker hem
          </SecondaryButton>
          <SecondaryButton onClick={() => navigate("/om-oss")}>
            Om föreningen
          </SecondaryButton>
          <SecondaryButton onClick={() => navigate("/intresseanmalan")}>
            Intresseanmälan{" "}
          </SecondaryButton>
          <SecondaryButton onClick={() => navigate("/situationen-i-spanien")}>
            Situationen i Spanien
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
