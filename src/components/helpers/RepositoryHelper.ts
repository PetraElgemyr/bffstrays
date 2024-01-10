import { client } from "../../client";
import * as contentful from "contentful";
import { IDog } from "../models/IDog";
import { IMedia } from "../models/IMedia";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { IPostDescription } from "../models/IPostDescription";
import { ILogo } from "../models/ILogo";

export const getAllDogs = async (): Promise<IDog[]> => {
  try {
    const response: contentful.EntryCollection<
      contentful.EntrySkeletonType,
      undefined,
      string
    > = await client.getEntries({
      content_type: "dog",
    });

    const theDogs: IDog[] = [];

    response.items.map((item) => {
      const name = item.fields.name?.toString() ?? "";
      const age = item.fields.age?.toString() ?? "";
      const ageGroup = item.fields.ageGroup?.toString() ?? "";
      const gender = item.fields.gender?.toString() ?? "";
      const weight = parseInt(item.fields.weight?.toString() ?? "");
      const size = item.fields.size?.toString() ?? "";
      const isNeutered = item.fields.isNeutered ? true : false;
      const description = item.fields.description?.toString() ?? "";
      const img = item.fields.img as IMedia[];
      const isChildFriendly = item.fields.isChildFriendly?.toString() ?? "";
      const isPetFriendly = item.fields.isPetFriendly?.toString() ?? "";
      const medias = item.fields.medias as IMedia[];
      const isAdopted = item.fields.isAdopted ? true : false;
      const id = item.sys.id;
      const breed = item.fields.breed?.toString() ?? "";
      const price = parseInt(item.fields.price?.toString() ?? "");
      const yearAdopted = parseInt(item.fields.yearAdopted?.toString() ?? "");

      const dog: IDog = {
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
        yearAdopted,
      };

      theDogs.push(dog);
    });
    return theDogs;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllPosts = async (): Promise<IPost[]> => {
  try {
    const response: contentful.EntryCollection<
      contentful.EntrySkeletonType,
      undefined,
      string
    > = await client.getEntries({
      content_type: "post",
    });
    const thePosts: IPost[] = [];

    response.items.map((item) => {
      const id = parseInt(item.fields.id?.toString() ?? "");
      const title = item.fields.title?.toString() ?? "";
      const pageId = item.fields.pageId?.toString() ?? "";
      const postText = item.fields.postText?.toString() ?? "";
      const img = item.fields.img as IMedia[];
      const medias = item.fields.medias as IMedia[];
      const infoText = item.fields.infoText?.toString() ?? "";
      const list = item.fields.list as contentful.EntryFieldTypes.RichText;

      const post = {
        id,
        title,
        pageId,
        postText,
        img,
        medias,
        infoText,
        list,
      };
      thePosts.push(post);
    });
    return thePosts;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllSlides = async (): Promise<ISlide[]> => {
  try {
    const response: contentful.EntryCollection<
      contentful.EntrySkeletonType,
      undefined,
      string
    > = await client.getEntries({
      content_type: "slideImage",
    });

    const theSlideImages: ISlide[] = [];

    response.items.map((item) => {
      const slideTitle = item.fields.slideTitle?.toString() ?? "";
      const slideImage = item.fields.slideImage as IMedia[];

      const slide: ISlide = {
        slideTitle,
        slideImage,
      };

      theSlideImages.push(slide);
    });
    return theSlideImages;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllDescriptions = async (): Promise<IPostDescription[]> => {
  try {
    const response: contentful.EntryCollection<
      contentful.EntrySkeletonType,
      undefined,
      string
    > = await client.getEntries({
      content_type: "postDescription",
    });

    const descriptions: IPostDescription[] = [];

    response.items.map((item) => {
      const title = item.fields.title?.toString() ?? "";
      const img = item.fields.img as IMedia;
      const description = item.fields.description?.toString() ?? "";
      const descriptionId = parseInt(
        item.fields.descriptionId?.toString() ?? ""
      );

      const postDescription: IPostDescription = {
        title,
        img,
        description,
        descriptionId,
      };

      descriptions.push(postDescription);
    });
    return descriptions;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getLogo = async (): Promise<ILogo | null> => {
  try {
    const response: contentful.EntryCollection<
      contentful.EntrySkeletonType,
      undefined,
      string
    > = await client.getEntries({
      content_type: "logo",
    });

    const logoImg = response.items[0].fields.logoImg as IMedia;
    const tabLogo = response.items[0].fields.tabLogo as IMedia;

    const logo: ILogo = {
      logoImg,
      tabLogo,
    };

    return logo;
  } catch (error) {
    console.log(error);
    return null;
  }
};
