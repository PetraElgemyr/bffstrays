import { useCallback, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { getAllPosts } from "../helpers/RepositoryHelper";

export const HomePage = () => {
  const { posts, setPosts } = useAppContext();

  const fetchPosts = useCallback(async () => {
    try {
      const response = await getAllPosts();
      if (response) {
        setPosts(response);
      } else {
        console.log("Inga inlägg");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      return;
    } else {
      fetchPosts();
    }
  }, [fetchPosts]);

  return (
    <>
      <h1>Bff Strays</h1>
      <div>
        <h4>Inlägg</h4>
        {posts.map((post, key) => (
          <article key={key}>
            <h6>{post.title.toString()}</h6>
            <p>{post.postText.toString()}</p>
          </article>
        ))}
      </div>
    </>
  );
};
