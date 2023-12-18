// import { useNavigate } from "react-router";

import { useCallback, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { DogEntrySkeleton } from "../models/Dog";
import { client } from "../../client";
import * as contentful from "contentful";
import { Media } from "../models/Media";

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
          const theDogs: DogEntrySkeleton[] = [];

          entries.items.map((item) => {
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
            const isAdopted = item.fields
              .isAdopted as contentful.EntryFieldTypes.Boolean;
            const id = item.sys.id;

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
              isAdopted,
              id,
            };
            theDogs.push(dog);
          });
          setDogs(theDogs);
          console.log(theDogs);
        }
      );
  }, []);

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
        {dogs.map((dog: DogEntrySkeleton, key) => (
          <div key={key}>
            <img
              alt={dog.name.toString()}
              src={`https:${dog.img[0].fields.file.url}`}
            />{" "}
            <p>{dog.name.toString()}</p>
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
    </>
  );
};
