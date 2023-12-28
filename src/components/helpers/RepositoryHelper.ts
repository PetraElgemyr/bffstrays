import { client } from "../../client";
import * as contentful from "contentful";
import { Dog } from "../models/Dog";
import { Media } from "../models/Media";
import { Post } from "../models/Post";

export const getAllDogs = async (): Promise<Dog[]> => {
  try {
    const response: contentful.EntryCollection<
      contentful.EntrySkeletonType,
      undefined,
      string
    > = await client.getEntries({
      content_type: "dog",
    });

    const theDogs: Dog[] = [];

    response.items.map((item) => {
      const name = item.fields.name?.toString() ?? "";
      const age = item.fields.age?.toString() ?? "";
      const ageGroup = item.fields.ageGroup?.toString() ?? "";
      const gender = item.fields.gender?.toString() ?? "";
      const weight = parseInt(item.fields.weight?.toString() ?? "");
      const size = item.fields.size?.toString() ?? "";
      const isNeutered = item.fields.isNeutered ? true : false;
      const description = item.fields.description?.toString() ?? "";
      const img = item.fields.img as Media[];
      const isChildFriendly = item.fields.isChildFriendly?.toString() ?? "";
      const isPetFriendly = item.fields.isPetFriendly?.toString() ?? "";
      const medias = item.fields.medias as Media[];
      const isAdopted = item.fields.isAdopted ? true : false;
      const id = item.sys.id;
      const breed = item.fields.breed?.toString() ?? "";
      const price = parseInt(item.fields.price?.toString() ?? "");

      const dog: Dog = {
        name,
        age,
        ageGroup,
        gender,
        weight,
        size,
        isNeutered,
        description,
        img,
        isChildFriendly,
        isPetFriendly,
        medias,
        isAdopted,
        id,
        breed,
        price,
      };

      theDogs.push(dog);
    });
    return theDogs;
  } catch (error) {
    console.log(error);
    return [];
  }

  //   client
  //     .getEntries({ content_type: "dog" })
  //     .then(
  //       (
  //         entries: contentful.EntryCollection<
  //           contentful.EntrySkeletonType,
  //           undefined,
  //           string
  //         >
  //       ) => {
  //         const theDogs: Dog[] = [];
  //         entries.items.map((item) => {
  //           const name = item.fields.name?.toString() ?? "";
  //           const age = item.fields.age?.toString() ?? "";
  //           const ageGroup = item.fields.ageGroup?.toString() ?? "";
  //           const gender = item.fields.gender?.toString() ?? "";
  //           const weight = parseInt(item.fields.weight?.toString() ?? "");
  //           const size = item.fields.size?.toString() ?? "";
  //           const isNeutered = item.fields.isNeutered ? true : false;
  //           const description = item.fields.description?.toString() ?? "";
  //           const img = item.fields.img as Media[];
  //           const isChildFriendly = item.fields.isChildFriendly?.toString() ?? "";
  //           const isPetFriendly = item.fields.isPetFriendly?.toString() ?? "";
  //           const medias = item.fields.medias as Media[];
  //           const isAdopted = item.fields.isAdopted ? true : false;
  //           const id = item.sys.id;
  //           const breed = item.fields.breed?.toString() ?? "";
  //           const price = parseInt(item.fields.price?.toString() ?? "");

  //           const dog: Dog = {
  //             name,
  //             age,
  //             ageGroup,
  //             gender,
  //             weight,
  //             size,
  //             isNeutered,
  //             description,
  //             img,
  //             isChildFriendly,
  //             isPetFriendly,
  //             medias,
  //             isAdopted,
  //             id,
  //             breed,
  //             price,
  //           };
  //           theDogs.push(dog);
  //           console.log(theDogs, "hääääär");

  //           return theDogs;
  //         });
  //       }
  //     );
};

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const response: contentful.EntryCollection<
      contentful.EntrySkeletonType,
      undefined,
      string
    > = await client.getEntries({
      content_type: "post",
    });
    const thePosts: Post[] = [];

    response.items.map((item) => {
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
    return thePosts;
  } catch (error) {
    console.log(error);
    return [];
  }
};

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
