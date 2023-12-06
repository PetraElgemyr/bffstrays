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
  id: string; //contentful.EntryFieldTypes.Integer;
  name: string | undefined; //contentful.EntryFieldTypes.Text;
  age: number | undefined; //contentful.EntryFieldTypes.Integer;
  gender: string | undefined; //contentful.EntryFieldTypes.Text;
  weight: number | undefined; //contentful.EntryFieldTypes.Integer;
  isNeutered: boolean | undefined; //contentful.EntryFieldTypes.Boolean;
  description: string | undefined; //contentful.EntryFieldTypes.Text;
  postedAt: Date; //contentful.EntryFieldTypes.Date;
  updatedAt: Date; // contentful.EntryFieldTypes.Date;
  img: string | { url: string };

  //   img: string; // contentful.EntryFieldTypes.AssetLink;
};

// type PostEntrySkeleton = {
//   id: string; //contentful.EntryFieldTypes.Integer;
//   title: string; //contentful.EntryFieldTypes.Text;
//   postText: string; //contentful.EntryFieldTypes.RichText;
//   pageId: string; //contentful.EntryFieldTypes.Text;
//   uploadedAt: Date; //contentful.EntryFieldTypes.Date;
//   updatedAt: Date; //contentful.EntryFieldTypes.Date;
//   img: string; //contentful.EntryFieldTypes.AssetLink;
// };

export const HomePage = () => {
  const [dogs, setDogs] = useState<DogEntrySkeleton[]>([]);
  //   const [posts, setPosts] = useState<PostEntrySkeleton[]>([]);

  const cleanUpData = useCallback(
    (
      response: contentful.EntryCollection<contentful.EntrySkeletonType>,
      isDog: boolean
    ) => {
      if (isDog) {
        const cleanedDogs: DogEntrySkeleton[] = [];
        response.items.map((object) => {
          //   const cleanData: DogEntrySkeleton = object;
          const name = object.fields.name?.toString() ?? "";
          const description = object.fields.description?.toString() ?? "";
          const age = parseInt(object.fields.age?.toString() ?? "0");
          const id = object.sys.id?.toString();
          const isNeutered =
            object.fields.isNeutered?.toString() === "true" ? true : false;
          const gender = object.fields.gender?.toString();
          const weight = parseInt(object.fields.weight?.toString() ?? "0");
          //   const img = object.fields.img?.fields.file.url || "";
          const img =
            (
              object.fields.img as
                | { fields: { file: { url: string } } }
                | undefined
            )?.fields.file.url ?? "";

          const postedAt = new Date(object.sys.createdAt);
          const updatedAt = new Date(object.sys.updatedAt);

          const updatedDog: DogEntrySkeleton = {
            name,
            description,
            age,
            id,
            isNeutered,
            weight,
            gender,
            img,
            postedAt,
            updatedAt,
          };
          cleanedDogs.push(updatedDog);
          console.log(updatedDog);
        });
        setDogs(cleanedDogs);

        // const cleanedDogs: DogEntrySkeleton[] = response.items.map((object) => {
        //   const cleanData: DogEntrySkeleton = {
        //     id: parseInt(object.sys.id),
        //     name: object.fields.name.toString() ?? "",
        //     age: parseInt(object.fields.age),
        //     gender: object.fields.gender.toString(),
        //     weight: parseInt(object.fields.weight),
        //     isNeutered: object.fields.isNeutered === true ? true : false,
        //     description: object.fields.description?.toString() ?? "",
        //     postedAt: new Date(object.sys.createdAt),
        //     updatedAt: new Date(object.sys.updatedAt),
        //     img: object.fields.img?.fields?.file.url ?? "",
        //   };
        //   return cleanData;
        // });
        // setDogs(cleanedDogs);
        console.log(cleanedDogs);
      } else {
        // const cleanedPosts: PostEntrySkeleton[] = [];
        // response.items.map((object) => {
        //   const cleanData: PostEntrySkeleton = object.fields;
        //   cleanedPosts.push(cleanData);
        // });
        // setPosts(cleanedPosts);
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
            <img src={dog.img.toString()} alt={dog.name} />
            <p>{dog.name}</p>
            <span>{dog.age}</span>
            <span>{dog.description}</span>
          </div>
        ))}
      </div>
      {/* <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.pageId}</p>
            <span>{post.postText}</span>
          </div>
        ))}
      </div> */}
    </>
  );
};
