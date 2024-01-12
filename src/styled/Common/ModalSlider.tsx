import styled from "styled-components";
import {
  StyledDogSlider,
  StyledDogSliderImage,
} from "../DogDetails/StyledDogSlider";
import { devices } from "../Variables/devices";

export const ModalSlider = styled(StyledDogSlider)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  max-height: 70vh;
  width: unset;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
  margin: 0;

  @media screen and (${devices.mobileL}) {
  }

  @media screen and (${devices.tablet}) {
    max-width: 70%;
  }

  @media screen and (${devices.laptop}) {
    max-height: 80%;
  }
`;

export const ModalSliderImage = styled(StyledDogSliderImage)`
  height: auto;
  height: 50vh;
  position: relative;
  object-fit: contain;
  object-position: center;
  width: auto;

  @media screen and (${devices.mobileL}) {
    height: 55vh;
  }

  @media screen and (${devices.tablet}) {
    max-width: 770vh;
  }

  @media screen and (${devices.laptop}) {
    max-height: 85vh;
  }
`;
