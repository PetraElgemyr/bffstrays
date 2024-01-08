import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { IPost } from "../models/IPost";

export const RegisterInterestPage = () => {
  const { posts, setPosts } = useAppContext();
  const [intrerestPosts, setInterestPosts] = useState<IPost[]>([]);

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(
        posts,
        PageName.RegisterInterest
      );
      setInterestPosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(
            response,
            PageName.RegisterInterest
          );
          setInterestPosts(filteredPosts);
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
      {intrerestPosts.map((post, key) => (
        <div key={key}>
          <h2>{post.title}</h2>
          <p>{post.postText}</p>
        </div>
      ))}
    </>
  );
};
