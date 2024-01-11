import { CCarouselItem } from "@coreui/react";
import {
  StyledDogSlider,
  StyledDogSliderImage,
} from "../styled/DogDetails/StyledDogSlider";
import { IDogSlide } from "./pages/DogDetails";

interface IDogSliderProps {
  slides: IDogSlide[];
}

export const DogSlider = ({ slides }: IDogSliderProps) => {
  return (
    <StyledDogSlider controls indicators>
      {slides.map((slide, index) => {
        return (
          <CCarouselItem key={index}>
            <StyledDogSliderImage
              className="d-block w-100"
              src={slide.url}
              alt={slide.imgName}
            />
          </CCarouselItem>
        );
      })}
    </StyledDogSlider>
  );
};
