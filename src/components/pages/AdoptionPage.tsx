import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { Post } from "../models/Post";
import { filterPostsPerPage } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { AdoptionImage } from "../../styled/Adoption/AdoptionImage";
import { useNavigate } from "react-router";
import { PrimaryButton } from "../../styled/Buttons/PrimaryButton";

export const AdoptionPage = () => {
  const { posts, setPosts } = useAppContext();
  const [adoptionPosts, setAdoptionPosts] = useState<Post[]>([]);
  const navigate = useNavigate();
  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.Adoption);
      setAdoptionPosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(response, PageName.Adoption);
          setAdoptionPosts(filteredPosts);
        } else {
          console.log("Inga inlägg");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      {adoptionPosts.map((post, key) => {
        if (post.title === PageName.Adoption) {
          return (
            <article key={key}>
              {post.img.length > 0 ? (
                <AdoptionImage
                  src={`https:${post.img[0].fields.file.url}`}
                  alt={post.title}
                />
              ) : (
                <></>
              )}
              <h2>{post.title.toString()}</h2>
              <p>{post.postText.toString()}</p>
            </article>
          );
        } else {
          return (
            <article key={key}>
              <h4>{post.title.toString()}</h4>
              <p>{post.postText.toString()}</p>
              {post.img ? (
                <img
                  src={`https:${post.img[0].fields.file.url}`}
                  alt={post.title}
                />
              ) : (
                <></>
              )}
            </article>
          );
        }
      })}

      <h4>Klicka här för att läsa mer om de krav vi har på adoptörer</h4>
      <PrimaryButton onClick={() => navigate("/krav-pa-adoptorer")}>
        Krav på adoptörer
      </PrimaryButton>
    </>
  );
};
