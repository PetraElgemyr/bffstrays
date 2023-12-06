import { useCallback, useEffect, useState } from "react";
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

type DogEntrySkeleton = {
  id: number; //contentful.EntryFieldTypes.Integer;
  name: string; //contentful.EntryFieldTypes.Text;
  age: number; //contentful.EntryFieldTypes.Integer;
  gender: string; //contentful.EntryFieldTypes.Text;
  weight: number; //contentful.EntryFieldTypes.Integer;
  isNeutered: boolean; //contentful.EntryFieldTypes.Boolean;
  description: string; //contentful.EntryFieldTypes.Text;
  postedAt: Date; //contentful.EntryFieldTypes.Date;
  updatedAt: Date; // contentful.EntryFieldTypes.Date;
  img: string; // contentful.EntryFieldTypes.AssetLink;
};

type PostEntrySkeleton = {
  id: number; //contentful.EntryFieldTypes.Integer;
  title: string; //contentful.EntryFieldTypes.Text;
  postText: string; //contentful.EntryFieldTypes.RichText;
  pageId: string; //contentful.EntryFieldTypes.Text;
  uploadedAt: Date; //contentful.EntryFieldTypes.Date;
  updatedAt: Date; //contentful.EntryFieldTypes.Date;
  img: string; //contentful.EntryFieldTypes.AssetLink;
};

export const HomePage = () => {
  const [dogs, setDogs] = useState<DogEntrySkeleton[]>([]);
  const [posts, setPosts] = useState<PostEntrySkeleton[]>([]);

  const cleanUpData = useCallback(
    (
      response: contentful.EntryCollection<contentful.EntrySkeletonType>,
      isDog: boolean
    ) => {
      if (isDog) {
        const cleanedDogs: DogEntrySkeleton[] = [];
        response.items.map((object) => {
          const cleanData: DogEntrySkeleton = object.fields;
          cleanedDogs.push(cleanData);
        });
        setDogs(cleanedDogs);
      } else {
        const cleanedPosts: PostEntrySkeleton[] = [];
        response.items.map((object) => {
          const cleanData: PostEntrySkeleton = object.fields;
          cleanedPosts.push(cleanData);
        });
        setPosts(cleanedPosts);
      }
    },
    []
  );

  const getContentfulDogData = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "dog",
      });
      cleanUpData(response, true);
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpData]);

  const getContentfulPostData = useCallback(async () => {
    try {
      const response: contentful.EntryCollection<contentful.EntrySkeletonType> =
        await client.getEntries<contentful.EntrySkeletonType, string>({
          content_type: "post",
        });

      cleanUpData(response, false);
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpData]);

  useEffect(() => {
    getContentfulDogData();
    getContentfulPostData();
  }, [getContentfulDogData, getContentfulPostData]);

  return (
    <>
      <div>
        {dogs.map((dog, key) => (
          <div key={key}>
            <img src={dog.img} alt={dog.name} />
            <p>{dog.name}</p>
            <span>{dog.age}</span>
            <span>{dog.description}</span>
          </div>
        ))}
      </div>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.pageId}</p>
            <span>{post.postText}</span>
          </div>
        ))}
      </div>
    </>
  );
};
