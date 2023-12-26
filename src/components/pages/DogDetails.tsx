import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Dog } from "../models/Dog";
import { useAppContext } from "../contexts/AppContext";
import "../../scss/DogDetails.scss";
import { DogImgContainer } from "../../styled/DogDetailsPage.tsx/DogImgContainer";
import { DogInfoContainer } from "../../styled/DogDetailsPage.tsx/DogInfoContainer";
import { getAllDogs } from "../helpers/RepositoryHelper";
import { DogFactsContainer } from "../../styled/DogDetailsPage.tsx/DogFactsContainer";
import { Col } from "../../styled/Common/Common";

export const DogDetails = () => {
  const { dogs, setDogs } = useAppContext();
  const { id } = useParams();
  const [dog, setDog] = useState<Dog>();

  useEffect(() => {
    if (id) {
      if (dogs.length === 0) {
        getAllDogs()
          .then((theDogs) => {
            console.log(theDogs, "nuuu kommit");
            if (theDogs) {
              setDogs(theDogs);
              const dogExists = theDogs.find((dog) => dog.id === id);
              setDog(dogExists);
            } else {
              console.log("no dogs");
            }
          })
          .catch((error) => console.error(error));
      } else {
        const dogExists = dogs.find((dog) => dog.id === id);
        setDog(dogExists);
      }
    }
  }, [id, dogs, setDogs]);

  return (
    <>
      {dog ? (
        <div
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DogInfoContainer>
            <DogImgContainer
              url={`https:${dog.img[0].fields.file.url}`}
            ></DogImgContainer>
            <DogFactsContainer>
              <h2>{dog.name}</h2>
              <p>Ålder: {dog.age}</p>
              <p>Kön: {dog.gender}</p>
              <p>Ras: {dog.breed}</p>
              <p>Kastrerad: {dog.isNeutered}</p>
              <p>Storlek: {dog.size}</p>
              <p>Vikt: {dog.weight} kg</p>
            </DogFactsContainer>
          </DogInfoContainer>
          <Col>
            <article>{dog.description}</article>
          </Col>
        </div>
      ) : (
        // {dog.medias.map((media: Media, key: number) => (
        //     <img
        //       key={key}
        //       alt={dog.name.toString()}
        //       src={`https:${media.fields.file.url}`}
        //     />
        //   ))}

        <p className="black">hund med id {id} hittades inte</p>
      )}
    </>
  );
};
