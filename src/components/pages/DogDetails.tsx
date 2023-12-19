import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Dog } from "../models/Dog";
import { useAppContext } from "../contexts/AppContext";
import "../../scss/DogDetails.scss";

export const DogDetails = () => {
  const { dogs } = useAppContext();
  const { id } = useParams();
  const [dog, setDog] = useState<Dog>();

  useEffect(() => {
    if (id) {
      console.log("hund med id: ", id);
      const dogExists = dogs.find((dog) => dog.id === id);
      // {
      //   setDog(dog);
      //   setFoundDog(true);
      // }
      setDog(dogExists);
    }
  }, [id, dogs]);

  return (
    <>
      {dog ? (
        <div>
          <h2>{dog.name}</h2>
          <p>Ålder: {dog.age}</p>
          <p>Kön: {dog.gender}</p>
          {/* {dog.medias.map((media: Media, key: number) => (
            <img
              key={key}
              alt={dog.name.toString()}
              src={`https:${media.fields.file.url}`}
            />
          ))} */}
        </div>
      ) : (
        <p className="black">hund med id {id} hittades inte</p>
      )}
    </>
  );
};
