// import { useNavigate } from "react-router";

import { useCallback, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { Dog } from "../models/Dog";
import { client } from "../../client";
import * as contentful from "contentful";
import { Media } from "../models/Media";
import {
  DogCard,
  Image,
  ImageContainer,
} from "../../styled/DogDetailsPage.tsx/DogCard";

export const AllDogsPage = () => {
  // const navigate = useNavigate();
  const { dogs, setDogs } = useAppContext();
  const getAllDogs = useCallback(() => {
    client
      .getEntries({ content_type: "dog" })
      .then(
        (
          entries: contentful.EntryCollection<
            contentful.EntrySkeletonType,
            undefined,
            string
          >
        ) => {
          const theDogs: Dog[] = [];

          entries.items.map((item) => {
            const name = item.fields.name?.toString() ?? "";
            const age = item.fields.age?.toString() ?? "";
            const gender = item.fields.gender?.toString() ?? "";
            const weight = parseInt(item.fields.weight?.toString() ?? "");
            const size = item.fields.size?.toString() ?? "";
            const isNeutered = item.fields.isNeutered ? true : false;
            const description = item.fields.description?.toString() ?? "";
            const img = item.fields.img as Media[];
            const isChildFriendly =
              item.fields.isChildFriendly?.toString() ?? "";
            const isPetFriendly = item.fields.isPetFriendly?.toString() ?? "";
            const medias = item.fields.medias as Media[];
            const isAdopted = item.fields.isAdopted ? true : false;
            const id = item.sys.id;

            const dog: Dog = {
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
              isAdopted,
              id,
            };
            theDogs.push(dog);
          });
          setDogs(theDogs);
        }
      );
  }, [setDogs]);

  useEffect(() => {
    if (dogs.length > 0) {
      console.log(dogs);
    } else {
      getAllDogs();
    }
  }, []);
  return (
    <>
      <div>
        <h2>Hundar som söker hem</h2>
        {dogs.map((dog: Dog, key) => (
          <DogCard key={key}>
            <ImageContainer>
              <Image
                src={`https:${dog.img[0].fields.file.url}`}
                alt={dog.name}
              />
            </ImageContainer>
            <p>{dog.name}</p>
            {/* {dog.medias.map((media: Media, key: number) => (
            <img
              key={key}
              alt={dog.name.toString()}
              src={`https:${media.fields.file.url}`}
            />
          ))} */}
          </DogCard>
        ))}
      </div>
    </>
  );
};
