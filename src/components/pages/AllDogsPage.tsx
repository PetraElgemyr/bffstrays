import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
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
  FilterButton,
  FilterOptionsContainers,
  Image,
  ImageContainer,
  PrimaryButton,
  StyledDiv,
} from "../../styled/DogDetailsPage.tsx/DogCard";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import { Col } from "../../styled/Common/Common";

export const AllDogsPage = () => {
  const navigate = useNavigate();
  const { dogs, setDogs } = useAppContext();
  const [filters, setFilters] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredDogs, setFilteredDogs] = useState<Dog[]>([]);
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
            const ageGroup = item.fields.ageGroup?.toString() ?? "";
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
          setDogs(theDogs);
          setFilteredDogs(theDogs);
        }
      );
  }, [setDogs]);

  useEffect(() => {
    if (dogs.length > 0) {
      setFilteredDogs(dogs);
    } else {
      getAllDogs();
    }
  }, []);

  const handleFilterChange = (option: string) => {
    if (option === "clear") {
      setFilters([]);
      setFilteredDogs(dogs);
      console.log(filters);
      return;
    }

    const newFilters: string[] = [...filters];
    const indexOfString = newFilters.findIndex(
      (filter) => filter.toUpperCase() === option.toUpperCase()
    );
    if (indexOfString !== -1) {
      newFilters.splice(indexOfString, 1);
    } else {
      newFilters.push(option);
    }
    console.log(filters);
    setFilters(newFilters);
    filterDogs(newFilters);
  };

  function filterDogs(newFilters: string[]) {
    if (newFilters.length === 0) {
      setFilteredDogs(dogs);
    } else {
      let newFilteredDogs: Dog[] = [];
      newFilters.forEach((filter) => {
        const matchingDogs = dogs.filter((dog) => {
          if (
            filter.toUpperCase() === "HANE" &&
            dog.gender.toString().toUpperCase() === "HANE"
          ) {
            return true;
          }
          if (
            filter.toUpperCase() === "TIK" &&
            dog.gender.toString().toUpperCase() === "TIK"
          ) {
            return true;
          }
          if (
            filter.toUpperCase() === "LITEN" &&
            dog.size.toString().toUpperCase() === "LITEN"
          ) {
            return true;
          }
          if (
            filter.toUpperCase() === "MELLAN" &&
            dog.size.toString().toUpperCase() === "MELLAN"
          ) {
            return true;
          }
          if (
            filter.toUpperCase() === "STOR" &&
            dog.size.toString().toUpperCase() === "STOR"
          ) {
            return true;
          }
          if (
            filter.toUpperCase() === "VALP" &&
            dog.ageGroup.toString().toUpperCase() === "VALP"
          ) {
            return true;
          }
          if (
            filter.toUpperCase() === "VUXEN" &&
            dog.ageGroup.toString().toUpperCase() === "VUXEN"
          ) {
            return true;
          }
          if (
            filter.toUpperCase() === "SENIOR" &&
            dog.ageGroup.toString().toUpperCase() === "SENIOR"
          ) {
            return true;
          }
        });
        newFilteredDogs = [...newFilteredDogs, ...matchingDogs];
      });
      setFilteredDogs(newFilteredDogs);
    }
  }

  return (
    <>
      <StyledDiv>
        <h2>Hundar som söker hem</h2>

        <ButtonContainer width="80%">
          <Col>
            <PrimaryButton
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              Filtrera <FilterAltRoundedIcon />{" "}
            </PrimaryButton>
            {showDropdown && (
              <FilterOptionsContainers>
                <p
                  onClick={() => {
                    setFilteredDogs(dogs);
                    setFilters([]);
                  }}
                >
                  Rensa filter
                </p>
                <span>Kön</span>
                <FilterButton onClick={() => handleFilterChange("tik")}>
                  Tik
                </FilterButton>
                <FilterButton onClick={() => handleFilterChange("hane")}>
                  Hane
                </FilterButton>
                <span>Storlek</span>
                <FilterButton onClick={() => handleFilterChange("Liten")}>
                  {"Liten < 8kg"}
                </FilterButton>
                <FilterButton onClick={() => handleFilterChange("Mellan")}>
                  {"Mellan 9-25kg"}
                </FilterButton>

                <FilterButton onClick={() => handleFilterChange("Stor")}>
                  {"Stor > 25kg"}
                </FilterButton>
                <span>Ålder</span>
                <FilterButton onClick={() => handleFilterChange("valp")}>
                  {"Valp < 1 år"}
                </FilterButton>
                <FilterButton onClick={() => handleFilterChange("vuxen")}>
                  {"Vuxen 1-5 år"}
                </FilterButton>
                <FilterButton onClick={() => handleFilterChange("senior")}>
                  {"Senior > 6 år"}
                </FilterButton>
              </FilterOptionsContainers>
            )}
          </Col>
          <Col>
            <PrimaryButton>
              Sortera <SortRoundedIcon />{" "}
            </PrimaryButton>
          </Col>
        </ButtonContainer>
        {filteredDogs.map((dog: Dog, key) => (
          <DogCard
            onClick={() => {
              navigate(`/hundar-soker-hem/${dog.id}`);
            }}
            key={key}
          >
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
              <CardText>Pris: {dog.price}kr</CardText>
              <ButtonContainer>
                {" "}
                <CardText>Storlek: {dog.size}</CardText>
                <PrimaryButton
                  onClick={() => {
                    navigate(`/hundar-soker-hem/${dog.id}`);
                  }}
                >
                  Läs mer
                </PrimaryButton>
              </ButtonContainer>
            </CardTextContainer>
          </DogCard>
        ))}
      </StyledDiv>
    </>
  );
};
