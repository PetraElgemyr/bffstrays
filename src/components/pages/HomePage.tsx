import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { filterPostsPerPage } from "../helpers/FilterHelper";
import { PageName } from "../enums/PageName";
import { Post } from "../models/Post";

export const HomePage = () => {
  const { posts, setPosts } = useAppContext();
  const [homePosts, setHomePosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.Home);
      setPosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(response, PageName.Home);
          setHomePosts(filteredPosts);
        } else {
          console.log("Inga inlägg");
          setPosts([]);
          setHomePosts([]);
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
      <h1>Bff Strays</h1>
      <div>
        <h4>Inlägg för startsidan</h4>
        {homePosts.map((post, key) => (
          <article key={key}>
            <h6>{post.title.toString()}</h6>
            <p>{post.postText.toString()}</p>
          </article>
        ))}
      </div>
    </>
  );
};
