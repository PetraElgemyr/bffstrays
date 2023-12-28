import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../contexts/AppContext";
import { Dog } from "../models/Dog";
import {
  ButtonContainer,
  CardText,
  CardTextContainer,
  CardTitle,
  ColContainer,
  DogCard,
  FilterButton,
  FilterOptionsContainers,
  Image,
  ImageContainer,
  StyledDiv,
} from "../../styled/AllDogsPage.tsx/DogCard";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import { Col } from "../../styled/Common/Common";
import { getAllDogs } from "../helpers/RepositoryHelper";
import { PrimaryButton } from "../../styled/Buttons/PrimaryButton";

export const AllDogsPage = () => {
  const navigate = useNavigate();
  const { dogs, setDogs } = useAppContext();
  const [filters, setFilters] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredDogs, setFilteredDogs] = useState<Dog[]>([]);

  const fetchDogData = useCallback(() => {
    if (dogs.length > 0) {
      setFilteredDogs(dogs);
    } else {
      getAllDogs()
        .then((theDogs) => {
          if (theDogs) {
            setDogs(theDogs);
            setFilteredDogs(theDogs);
          } else {
            console.log("Inga hundar");
          }
        })
        .catch((error) => console.error(error));
    }
  }, [dogs]);
  useEffect(() => {
    fetchDogData();
  }, [fetchDogData]);

  const handleFilterChange = (option: string) => {
    if (option === "clear") {
      setFilters([]);
      setFilteredDogs(dogs);
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
        <ColContainer>
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
        </ColContainer>
      </StyledDiv>
    </>
  );
};
