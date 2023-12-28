import { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { Post } from "../models/Post";

export const DonatePage = () => {
  const { posts, setPosts } = useAppContext();
  const [donatePosts, setDonatePosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.Donate);
      setDonatePosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(response, PageName.Donate);
          setDonatePosts(filteredPosts);
        } else {
          console.log("Inga inlägg");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h2>Donera</h2>

      {donatePosts.map((post, key) => (
        <article key={key}>
          <h6>{post.title.toString()}</h6>
          <p>{post.postText.toString()}</p>
        </article>
      ))}
    </>
  );
};
