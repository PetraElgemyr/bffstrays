// import { useNavigate } from "react-router";

import { useCallback, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { Dog } from "../models/Dog";
import { client } from "../../client";
import * as contentful from "contentful";
import { Media } from "../models/Media";
import {
  ButtonContainer,
  CardText,
  CardTextContainer,
  CardTitle,
  DogCard,
  Image,
  ImageContainer,
  SortButton,
  StyledDiv,
} from "../../styled/DogDetailsPage.tsx/DogCard";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

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
            const breed = item.fields.breed?.toString() ?? "";
            const price = parseInt(item.fields.price?.toString() ?? "");

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
              breed,
              price,
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
      <h2>Hundar som söker hem</h2>
      <StyledDiv>
        <ButtonContainer width="80%">
          <SortButton>
            Filtrera <FilterAltRoundedIcon />{" "}
          </SortButton>
          <SortButton>
            Sortera <SortRoundedIcon />{" "}
          </SortButton>
        </ButtonContainer>
        {dogs.map((dog: Dog, key) => (
          <DogCard key={key}>
            <ImageContainer>
              <Image
                src={`https:${dog.img[0].fields.file.url}`}
                alt={dog.name}
              />
            </ImageContainer>
            <CardTitle>{dog.name}</CardTitle>
            <CardTextContainer>
              <CardText>Ålder: {dog.age}</CardText>
              <CardText>Ras: {dog.breed}</CardText>
              <CardText>Kastrerad: {dog.isNeutered ? "Ja" : "Nej"}</CardText>
              <CardText>Pris: {dog.price}</CardText>
              <ButtonContainer>
                {" "}
                <CardText>Storlek: {dog.size}</CardText>
                <SortButton>Läs mer</SortButton>
              </ButtonContainer>
            </CardTextContainer>
            {/* {dog.medias.map((media: Media, key: number) => (
            <img
              key={key}
              alt={dog.name.toString()}
              src={`https:${media.fields.file.url}`}
            />
          ))} */}
          </DogCard>
        ))}
      </StyledDiv>
    </>
  );
};
