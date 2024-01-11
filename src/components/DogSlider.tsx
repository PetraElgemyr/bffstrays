import { CCarouselItem } from "@coreui/react";
import {
  StyledDogSlider,
  StyledDogSliderImage,
} from "../styled/DogDetails/StyledDogSlider";
import { IDogSlide } from "./pages/DogDetails";
import { useEffect, useState } from "react";
import { BigImageModal } from "./BigImageModal";
import {
  ModalSlider,
  DogModalSliderImage,
} from "../styled/DogDetails/ModalSlider";
import "./DogModal.scss";

export interface IDogSliderProps {
  slides: IDogSlide[];
  isDogModal: boolean;
}

export const DogSlider = ({ slides, isDogModal }: IDogSliderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [carousel, setCarousel] = useState<JSX.Element>(<></>);

  const toggleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    if (isDogModal) {
      setCarousel(
        <ModalSlider controls indicators className="carousel-not-inner">
          {slides.map((slide, index) => (
            <CCarouselItem className="haaaaajjj" key={index}>
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
                <DogModalSliderImage src={slide.url} alt={slide.imgName} />
              </div>
            </CCarouselItem>
          ))}
        </ModalSlider>
      );
    } else {
      setCarousel(
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
    }
  }, [isDogModal, modalIsOpen, slides, toggleModalIsOpen]);

  return <>{carousel}</>;
};
