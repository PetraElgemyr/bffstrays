import { useEffect, useState } from "react";
import { client } from "../../client";

import * as contentful from "contentful";

// type PostType = {
//   contentTypeId: "post";
//   fields: {
//     id: EntryFieldTypes.Number;
//     postText: EntryFieldTypes.RichText;
//     title: EntryFieldTypes.Text;
//     pageId: EntryFieldTypes.Text;
//   };
// };

interface Media {
  fields: {
    file: {
      url: string;
    };
  };
}

type DogEntrySkeleton = {
  name: contentful.EntryFieldTypes.Text;
  age: contentful.EntryFieldTypes.Text;
  gender: contentful.EntryFieldTypes.Text;
  weight: contentful.EntryFieldTypes.Integer;
  isNeutered: contentful.EntryFieldTypes.Boolean;
  description: contentful.EntryFieldTypes.Text;
  img: Media[];
  size: contentful.EntryFieldTypes.Text;
  isChildFriendly: contentful.EntryFieldTypes.Text;
  isPetFriendly: contentful.EntryFieldTypes.Text;
  medias: Media[];
};

type PostEntrySkeleton = {
  id: contentful.EntryFieldTypes.Integer;
  title: contentful.EntryFieldTypes.Text;
  pageId: contentful.EntryFieldTypes.Text;
  postText: contentful.EntryFieldTypes.Text;
  img: contentful.EntryFieldTypes.AssetLink;
  medias: contentful.EntryFieldTypes.AssetLink;
};

export const HomePage = () => {
  const [dogs, setDogs] = useState<DogEntrySkeleton[]>([]);
  const [posts, setPosts] = useState<PostEntrySkeleton[]>([]);

  useEffect(() => {
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
                const name = item.fields
                  .name as contentful.EntryFieldTypes.Text;
                const age = item.fields.age as contentful.EntryFieldTypes.Text;
                const gender = item.fields
                  .age as contentful.EntryFieldTypes.Text;
                const weight = item.fields
                  .weight as contentful.EntryFieldTypes.Integer;
                const size = item.fields
                  .size as contentful.EntryFieldTypes.Text;
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
                const img = item.fields
                  .img as contentful.EntryFieldTypes.AssetLink;
                const medias = item.fields
                  .medias as contentful.EntryFieldTypes.AssetLink;

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
    getAllContentfulData();
  }, []);

  useEffect(() => {
    console.log(dogs);
    console.log(posts);
  }, [dogs, posts]);

  return (
    <>
      <h1>Bff Strays</h1>

      <div>
        <h4>Hundar som söker hem</h4>
        {dogs.map((dog: DogEntrySkeleton, key) => (
          <div key={key}>
            <p>{dog.name.toString()}</p>
            <img
              alt={dog.name.toString()}
              src={`https:${dog.img[0].fields.file.url}`}
            />
            {/* {dog.medias.map((media: Media, key: number) => (
              <img
                key={key}
                alt={dog.name.toString()}
                src={`https:${media.fields.file.url}`}
              />
            ))} */}
          </div>
        ))}
      </div>
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
