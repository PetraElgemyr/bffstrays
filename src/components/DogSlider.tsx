import { CCarouselItem } from "@coreui/react";
import {
  StyledDogSlider,
  StyledDogSliderImage,
} from "../styled/DogDetails/StyledDogSlider";
import { IDogSlide } from "./pages/DogDetails";
import { useState } from "react";
import { BigImageModal } from "./BigImageModal";

interface IDogSliderProps {
  slides: IDogSlide[];
}

export const DogSlider = ({ slides }: IDogSliderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const toggleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <StyledDogSlider controls indicators>
        {slides.map((slide, index) => {
          return (
            <CCarouselItem key={index}>
              <StyledDogSliderImage
                className="d-block w-100"
                src={slide.url}
                alt={slide.imgName}
                onClick={() => {
                  toggleModalIsOpen();
                }}
              />
              <BigImageModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                startUrl={slide.url}
                slides={slides}
              ></BigImageModal>
            </CCarouselItem>
          );
        })}
      </StyledDogSlider>
    </>
  );
};
