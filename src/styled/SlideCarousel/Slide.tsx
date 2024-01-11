import { styled } from "styled-components";
import { devices } from "../devices";
import { CCarousel, CCarouselCaption, CImage } from "@coreui/react";

export const StyledCarousel = styled(CCarousel)`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 10%;

  @media screen and (${devices.tablet}) {
    margin-bottom: 5%;
  }
`;
export const StyledCarouselCaption = styled(CCarouselCaption)`
  display: block;
  margin: 0;
  padding: 0;
  width: 100vw !important;
  margin-bottom: 6%;
  position: absolute;
  left: 0;
  right: 0;
  @media screen and (${devices.tablet}) {
    margin-bottom: 4%;
  }
`;

export const CarouselCaptionLower = styled(StyledCarouselCaption)`
  margin-bottom: 0;

  @media screen and (${devices.tablet}) {
    margin-bottom: 2%;
  }

  :hover {
    cursor: unset;
  }
`;

export const StyledSlideImage = styled(CImage)`
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media screen and (${devices.tablet}) {
    max-height: 55vh;
    position: relative;
    left: 0;
    object-position: center 40%;
  }

  @media screen and (${devices.laptop}) {
    max-height: 60vh;
  }

  @media screen and (${devices.laptopL}) {
    max-height: 65vh;
    object-position: center 35%;
  }
`;

export const SlideTitleContainer = styled.div`
  /* border-radius: 40px; */
  background: rgba(236, 236, 236, 0.4);
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0;

  @media screen and (${devices.tablet}) {
    height: 70px;
    border-radius: 0;
    width: 100vw;
  }

  @media screen and (${devices.laptop}) {
    height: 75px;
  }
`;

export const SlideTitleText = styled.h5`
  font-family: "Korolev Medium", "Trebuchet MS", Helvetica, sans-serif;
  color: black;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  margin: 0;
  @media screen and (${devices.tablet}) {
    font-size: 1.5rem;
  }
`;
