import { useCallback, useEffect } from "react";
import { client } from "../../client";
import * as contentful from "contentful";
import { Media } from "../models/Media";
import { Post } from "../models/Post";
import { useAppContext } from "../contexts/AppContext";

// type PostType = {
//   contentTypeId: "post";
//   fields: {
//     id: EntryFieldTypes.Number;
//     postText: EntryFieldTypes.RichText;
//     title: EntryFieldTypes.Text;
//     pageId: EntryFieldTypes.Text;
//   };
// };

export const HomePage = () => {
  const { posts, setPosts } = useAppContext();
  /*
  const getAllContentfulData = () => {
    client
      .getEntries()
      .then(
        (
          entries: contentful.EntryCollection<
            contentful.EntrySkeletonType,
            undefined,
            string
          >
        ) => {
          const theDogs: DogEntrySkeleton[] = [];
          const thePosts: PostEntrySkeleton[] = [];
          entries.items.map((item) => {
            if (item.sys.contentType.sys.id === "dog") {
              const name = item.fields.name as contentful.EntryFieldTypes.Text;
              const age = item.fields.age as contentful.EntryFieldTypes.Text;
              const gender = item.fields.age as contentful.EntryFieldTypes.Text;
              const weight = item.fields
                .weight as contentful.EntryFieldTypes.Integer;
              const size = item.fields.size as contentful.EntryFieldTypes.Text;
              const isNeutered = item.fields
                .isNeutered as contentful.EntryFieldTypes.Boolean;
              const description = item.fields
                .description as contentful.EntryFieldTypes.Text;
              const img = item.fields.img as Media[];
              const isChildFriendly = item.fields
                .isChildFriendly as contentful.EntryFieldTypes.Text;
              const isPetFriendly = item.fields
                .isPetFriendly as contentful.EntryFieldTypes.Text;
              const medias = item.fields.medias as Media[];

              const dog: DogEntrySkeleton = {
                name,
                age,
                gender,
                weight,
                size,
                isNeutered,
                description,
                img,
                isChildFriendly,
                isPetFriendly,
                medias,
              };
              theDogs.push(dog);
            } else if (item.sys.contentType.sys.id === "post") {
              const id = item.fields.id as contentful.EntryFieldTypes.Integer;
              const title = item.fields
                .title as contentful.EntryFieldTypes.Text;
              const pageId = item.fields
                .pageId as contentful.EntryFieldTypes.Text;
              const postText = item.fields
                .postText as contentful.EntryFieldTypes.Text;
              const img = item.fields.img as Media[];
              const medias = item.fields.medias as Media[];

              const post = {
                id,
                title,
                pageId,
                postText,
                img,
                medias,
              };
              thePosts.push(post);
            }
          });
          setDogs(theDogs);
          setPosts(thePosts);
        }
      );
  };
*/

  const getAllPosts = useCallback(() => {
    client
      .getEntries({ content_type: "post" })
      .then(
        (
          entries: contentful.EntryCollection<
            contentful.EntrySkeletonType,
            undefined,
            string
          >
        ) => {
          const thePosts: Post[] = [];
          entries.items.map((item) => {
            const id = item.sys.id?.toString() ?? "";
            const title = item.fields.title?.toString() ?? "";
            const pageId = item.fields.pageId?.toString() ?? "";
            const postText = item.fields.postText?.toString() ?? "";
            const img = item.fields.img as Media[];
            const medias = item.fields.medias as Media[];

            const post = {
              id,
              title,
              pageId,
              postText,
              img,
              medias,
            };
            thePosts.push(post);
          });
          setPosts(thePosts);
        }
      );
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      console.log(posts);
    } else {
      getAllPosts();
    }
  }, [getAllPosts]);

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
