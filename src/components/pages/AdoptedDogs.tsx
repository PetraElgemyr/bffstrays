import { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { filterAdoptedDogs } from "../helpers/FilterHelper";
import { IDog } from "../models/Dog";
import {
  ColContainer,
  DogCard,
  ImageContainer,
  Image,
  CardTitle,
  CardTextContainer,
  CardText,
  StyledDiv,
} from "../../styled/AllDogs/DogCard";
import { ColCentered, ColCenteredResponsive } from "../../styled/Common/Common";

export const AdoptedDogsPage = () => {
  const { dogs } = useAppContext();
  const [adoptedDogs, setAdoptedDogs] = useState<IDog[]>([]);

  useEffect(() => {
    const unadoptedDogs: IDog[] = filterAdoptedDogs(dogs, true);
    setAdoptedDogs(unadoptedDogs);
  }, [dogs]);

  return (
    <StyledDiv>
      <ColCentered>
        <ColCenteredResponsive>
          <h2>Adopterade hundar</h2>
          <p style={{ marginTop: "2%" }}>
            Här är de hundar som har adopterats via BFF Strays.
          </p>
        </ColCenteredResponsive>
        <ColContainer>
          {adoptedDogs
            .sort((a, b) => b.yearAdopted - a.yearAdopted)
            .map((dog: IDog, index: number) => (
              <DogCard key={index} style={{ cursor: "unset" }}>
                <ImageContainer>
                  <Image
                    src={`https:${dog.img[0].fields.file.url}`}
                    alt={dog.name}
                  />
                </ImageContainer>
                <CardTitle>{dog.name}</CardTitle>
                <CardTextContainer>
                  <CardText>Adopterad: {dog.yearAdopted}</CardText>
                </CardTextContainer>
              </DogCard>
            ))}
        </ColContainer>
      </ColCentered>
    </StyledDiv>
  );
};
