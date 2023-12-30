import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Dog } from "../models/Dog";
import { useAppContext } from "../contexts/AppContext";
import "../../scss/DogDetails.scss";
import {
  Carousel,
  DogImg,
  DogImgContainer1,
} from "../../styled/DogDetails/DogImgContainer";
import { DogInfoContainer } from "../../styled/DogDetails/DogInfoContainer";
import { DogFactsContainer } from "../../styled/DogDetails/DogFactsContainer";
import { Col } from "../../styled/Common/Common";
import {
  DogFactTextBold,
  DogFactText,
  DogDescription,
} from "../../styled/DogDetails/DogFactText";
import { CardTitle } from "../../styled/AllDogs/DogCard";
import { CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { PrimaryButton } from "../../styled/Buttons/PrimaryButton";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export const DogDetails = () => {
  const { dogs, setDogs } = useAppContext();
  const { id } = useParams();
  const [dog, setDog] = useState<Dog>();
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);

  const findImages = (dogExists: Dog) => {
    const urls: string[] = [];
    dogExists.medias.map((imgObject) => {
      urls.push(`https:${imgObject.fields.file.url}`);
      setImages(urls);
    });
  };

  useEffect(() => {
    if (id && dogs.length > 0) {
      const dogExists = dogs.find((dog) => dog.id === id);
      setDog(dogExists);

      if (dogExists && dogExists.medias) {
        findImages(dogExists);
      }
    }
  }, [id, dogs, setDogs]);

  return (
    <>
      {dog ? (
        <>
          <DogFactTextBold
            style={{
              cursor: "pointer",
              position: "relative",
              left: "2%",
              margin: "5%",
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon> Tillbaka
          </DogFactTextBold>
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
              <DogImgContainer1>
                <DogImg
                  src={`https:${dog.img[0].fields.file.url}`}
                  alt={dog.name}
                ></DogImg>
              </DogImgContainer1>
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
            {images.length > 0 ? (
              <Carousel controls indicators>
                {images.map((imgUrl, index) => (
                  <CCarouselItem key={index}>
                    <CImage
                      className="d-block w-100"
                      src={imgUrl}
                      alt={dog.name + index}
                    />{" "}
                  </CCarouselItem>
                ))}
              </Carousel>
            ) : (
              <p>Fler bilder kommer snart</p>
            )}
          </div>
        </>
      ) : (
        <p className="black">Hunden du söker finns inte</p>
      )}
    </>
  );
};
