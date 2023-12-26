import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Dog } from "../models/Dog";
import { useAppContext } from "../contexts/AppContext";
import "../../scss/DogDetails.scss";
import { DogImgContainer } from "../../styled/DogDetailsPage.tsx/DogImgContainer";
import { DogInfoContainer } from "../../styled/DogDetailsPage.tsx/DogInfoContainer";
import { getAllDogs } from "../helpers/RepositoryHelper";
import { DogFactsContainer } from "../../styled/DogDetailsPage.tsx/DogFactsContainer";
import { Col } from "../../styled/Common/Common";
import {
  DogFactTextBold,
  DogFactText,
  DogDescription,
} from "../../styled/DogDetailsPage.tsx/DogFactText";
import { CardTitle } from "../../styled/AllDogsPage.tsx/DogCard";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { PrimaryButton } from "../../styled/Buttons/PrimaryButton";

export const DogDetails = () => {
  const { dogs, setDogs } = useAppContext();
  const { id } = useParams();
  const [dog, setDog] = useState<Dog>();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      if (dogs.length === 0) {
        getAllDogs()
          .then((theDogs) => {
            if (theDogs) {
              setDogs(theDogs);
              const dogExists = theDogs.find((dog) => dog.id === id);
              setDog(dogExists);
            } else {
              console.log("inga hundar");
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
          <p
            onClick={() => {
              navigate(-1);
            }}
          >
            Tillbaka
          </p>
          <DogInfoContainer>
            <DogImgContainer
              url={`https:${dog.img[0].fields.file.url}`}
            ></DogImgContainer>
            <DogFactsContainer>
              <CardTitle>{dog.name}</CardTitle>
              <DogFactTextBold>
                Ålder: <DogFactText>{dog.age}</DogFactText>{" "}
              </DogFactTextBold>{" "}
              <DogFactTextBold>
                Kön: <DogFactText>{dog.gender}</DogFactText>
              </DogFactTextBold>
              <DogFactTextBold>
                Ras: <DogFactText>{dog.breed}</DogFactText>
              </DogFactTextBold>
              <DogFactTextBold>
                Kastrerad:<DogFactText>{dog.isNeutered}</DogFactText>{" "}
              </DogFactTextBold>
              <DogFactTextBold>
                Storlek:<DogFactText> {dog.size}</DogFactText>
              </DogFactTextBold>
              <DogFactTextBold>
                Vikt: <DogFactText>{dog.weight} kg </DogFactText>
              </DogFactTextBold>
            </DogFactsContainer>
          </DogInfoContainer>
          <Col style={{ alignItems: "center" }}>
            <DogDescription>{dog.description}</DogDescription>
          </Col>
          <PrimaryButton
            onClick={() => {
              navigate("/intresseanmalan");
            }}
          >
            Gör en intresseanmälan
          </PrimaryButton>
          {/* <CCarousel>
      {images.map((url, index) => (
        <CCarouselItem key={index}>
          <img src={url} alt={`Slide ${index}`} />
        </CCarouselItem>
      ))}
    </CCarousel> */}
          <CCarousel controls indicators style={{ width: "90%" }}>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
                alt="slide 1"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
                alt="slide 2"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
                alt="slide 3"
              />
            </CCarouselItem>
          </CCarousel>
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
