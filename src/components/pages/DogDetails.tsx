import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IDog } from "../models/IDog";
import {
  DogImg,
  DogImgContainer,
} from "../../styled/DogDetails/DogImgContainer";
import { DogInfoContainer } from "../../styled/DogDetails/DogInfoContainer";
import { DogFactsContainer } from "../../styled/DogDetails/DogFactsContainer";
import {
  DogFactTextBold,
  DogFactText,
} from "../../styled/DogDetails/DogFactText";
import { CardTitle } from "../../styled/AllDogs/DogCard";
import "@coreui/coreui/dist/css/coreui.min.css";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { DogSlider } from "../DogSlider";
import { SmallHeadline } from "../../styled/FontStyles/SmallHeadline";
import { CommonText } from "../../styled/FontStyles/CommonText";
import { ColCentered, ColStart } from "../../styled/Common/Common";
import { GoBackButton } from "../GoBackButton";
import { makeFoundImagesToSlides } from "../helpers/ImageHelper";
import { useAppContext } from "../hooks/useAppContext";

export interface IDogSlide {
  url: string;
  imgName: string;
}

export const DogDetails = () => {
  const { dogs, setDogs } = useAppContext();
  const { id } = useParams();
  const [dog, setDog] = useState<IDog>();
  const navigate = useNavigate();
  const [images, setImages] = useState<IDogSlide[]>([]);

  useEffect(() => {
    if (id && dogs.length > 0) {
      const dogExists = dogs.find((dog) => dog.id === id);
      setDog(dogExists);

      if (dogExists && dogExists.medias) {
        const createdSlides: IDogSlide[] = makeFoundImagesToSlides(
          dogExists,
          true
        );
        setImages(createdSlides);
      }
    }
  }, [id, dogs, setDogs]);

  return (
    <>
      {dog ? (
        <>
          <GoBackButton></GoBackButton>{" "}
          <ColCentered>
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
                <DogImgContainer>
                  <DogImg
                    src={`https:${dog.img[0].fields.file.url}`}
                    alt={dog.name}
                  ></DogImg>
                </DogImgContainer>
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
              <ColStart>
                <CommonText>{dog.description}</CommonText>
              </ColStart>
              <SecondaryButton
                selected={false}
                onClick={() => {
                  navigate("/intresseanmalan");
                }}
              >
                Gör en intresseanmälan
              </SecondaryButton>
              {images.length > 0 ? (
                <DogSlider isDogModal={false} slides={images}></DogSlider>
              ) : (
                <SmallHeadline>Fler bilder kommer snart</SmallHeadline>
              )}
            </div>
          </ColCentered>
        </>
      ) : (
        <ColCentered style={{ margin: "15%" }}>
          {" "}
          <SmallHeadline>
            Hoppsan! Hunden du söker finns tyvärr inte
          </SmallHeadline>
          <SecondaryButton onClick={() => navigate(-1)} selected={false}>
            <GoBackButton></GoBackButton>
          </SecondaryButton>
        </ColCentered>
      )}
    </>
  );
};
