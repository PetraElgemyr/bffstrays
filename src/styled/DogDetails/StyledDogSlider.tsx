import { CCarousel, CImage } from "@coreui/react";
import { styled } from "styled-components";
import { devices } from "../devices";

export const StyledDogSlider = styled(CCarousel)`
  display: flex;
  width: 90%;
  max-height: 40vh;
  margin-bottom: 10%;
  margin-top: 10%;

  @media screen and (${devices.mobileL}) {
    max-height: 50vh;
  }

  @media screen and (${devices.tablet}) {
    width: 80%;
    max-height: 65vh;
  }

  @media screen and (${devices.laptop}) {
    width: 55%;
    max-height: 80vh;
  }
`;

export const StyledDogSliderImage = styled(CImage)`
  position: relative;
  object-fit: cover;
  object-position: center 40%;
  height: 100%;
`;
