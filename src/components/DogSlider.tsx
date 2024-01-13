import { CCarouselItem } from "@coreui/react";
import {
  StyledDogSlider,
  StyledDogSliderImage,
} from "../styled/DogDetails/StyledDogSlider";
import { IDogSlide } from "./pages/DogDetails";
import { useEffect, useState } from "react";
import { ImageModal } from "./ImageModal";
import { ModalSlider, ModalSliderImage } from "../styled/Common/ModalSlider";
import "./../scss/modal.scss";

export interface IDogSliderProps {
  slides: IDogSlide[];
  isDogModal: boolean;
}

export const DogSlider = ({ slides, isDogModal }: IDogSliderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const toggleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    if (isDogModal) {
      setModalIsOpen(true);
    }
  }, [isDogModal]);

  if (isDogModal && slides.length > 1) {
    return (
      <ModalSlider controls indicators>
        {slides.map((slide, index) => (
          <CCarouselItem key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "80vw",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
                margin: 0,
                padding: 0,
              }}
            >
              <ModalSliderImage src={slide.url} alt={slide.imgName} />
            </div>
          </CCarouselItem>
        ))}
      </ModalSlider>
    );
  } else if (isDogModal && slides.length === 1) {
    return (
      <ModalSlider controls={false} interval={false}>
        {slides.map((slide, index) => (
          <CCarouselItem key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "80vw",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
                margin: 0,
                padding: 0,
              }}
            >
              <ModalSliderImage src={slide.url} alt={slide.imgName} />
            </div>
          </CCarouselItem>
        ))}
      </ModalSlider>
    );
  } else {
    return (
      <StyledDogSlider controls indicators>
        {slides.map((slide, index) => (
          <CCarouselItem key={index}>
            <StyledDogSliderImage
              className="d-block w-100"
              src={slide.url}
              alt={slide.imgName}
              onClick={toggleModalIsOpen}
            />
            <ImageModal
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              startUrl={slide.url}
              slides={slides}
              adoptedDogsBackground={false}
            />
          </CCarouselItem>
        ))}
      </StyledDogSlider>
    );
  }
};
