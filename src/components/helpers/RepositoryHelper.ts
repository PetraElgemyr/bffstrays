import { client } from "../../client";
import * as contentful from "contentful";
import { Dog } from "../models/Dog";
import { Media } from "../models/Media";

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
    return theDogs; // Return the array of dogs
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
