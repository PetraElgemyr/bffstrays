import { CCarouselItem } from "@coreui/react";
import {
  ModalSlider,
  ModalSliderImage,
} from "../styled/DogDetails/ModalSlider";
import { IDogSlide } from "./pages/DogDetails";

interface IDogSlideCarouselModalProps {
  slides: IDogSlide[];
  handleClose: () => void;
}

export const DogSlideCarouselModal = ({
  slides,
  handleClose,
}: IDogSlideCarouselModalProps) => {
  return (
    <ModalSlider controls indicators>
      {slides.map((slide, index) => {
        return (
          <CCarouselItem
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "80%",
            }}
          >
            <ModalSliderImage
              className="d-block w-100"
              src={slide.url}
              alt={slide.imgName}
              onClick={() => handleClose()}
            />
          </CCarouselItem>
        );
      })}
    </ModalSlider>
  );
};
