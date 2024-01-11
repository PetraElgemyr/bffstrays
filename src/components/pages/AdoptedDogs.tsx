import { useEffect, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { filterAdoptedDogs } from "../helpers/FilterHelper";
import { IDog } from "../models/IDog";
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
import { makeFoundImagesToSlides } from "../helpers/ImageHelper";
import { IDogSlide } from "./DogDetails";
import { SmallHeadline } from "../../styled/Fonts/SmallHeadline";
import { MainHeadline } from "../../styled/Fonts/MainHeadline";
import { ImageModal } from "../ImageModal";

export const AdoptedDogsPage = () => {
  const { dogs } = useAppContext();
  const [adoptedDogs, setAdoptedDogs] = useState<IDog[]>([]);
  const [images, setImages] = useState<IDogSlide[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const toggleModalIsOpen = (dog: IDog) => {
    setImages(makeFoundImagesToSlides(dog, false));
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    const unadoptedDogs: IDog[] = filterAdoptedDogs(dogs, true);
    setAdoptedDogs(unadoptedDogs);
  }, [dogs]);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledDiv>
        <ColCentered>
          <ColCenteredResponsive>
            <MainHeadline>Adopterade hundar</MainHeadline>
            <SmallHeadline>
              Här är de hundar som har adopterats via BFF Strays.
            </SmallHeadline>
          </ColCenteredResponsive>
          <ColContainer>
            {adoptedDogs
              .sort((a, b) => b.yearAdopted - a.yearAdopted)
              .map((dog: IDog, index: number) => (
                <DogCard
                  key={index}
                  style={{ cursor: "unset" }}
                  onClick={() => {
                    toggleModalIsOpen(dog);
                  }}
                >
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
                  <ImageModal
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    startUrl={dog.img[0].fields.file.url}
                    slides={images}
                    adoptedDogsBackground={true}
                  />
                </DogCard>
              ))}
          </ColContainer>{" "}
        </ColCentered>{" "}
      </StyledDiv>
    </div>
  );
};
